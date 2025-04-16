import React, { useState, useRef } from 'react';
import { X, Upload, Plus } from 'lucide-react';

export default function EventModal({ event, isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    id: event?.id || Date.now(),
    title: event?.title || '',
    subtitle: event?.subtitle || '',
    description: event?.description || '',
    images: event?.images || '',
    keyInformation: event?.keyInformation || ['', '', ''],
    informationSource: event?.informationSource || []
  });
  const [previewImage, setPreviewImage] = useState(event?.images || null);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess(formData);
    onClose();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewImage(objectUrl);
      setFormData(prev => ({ ...prev, images: objectUrl }));
    }
  };

  const updateKeyInformation = (index, value) => {
    setFormData(prev => ({
      ...prev,
      keyInformation: prev.keyInformation.map((item, i) => i === index ? value : item)
    }));
  };

  const addSource = () => {
    setFormData(prev => ({
      ...prev,
      informationSource: [...prev.informationSource, { from: '', topic: '' }]
    }));
  };

  const removeSource = (index) => {
    setFormData(prev => ({
      ...prev,
      informationSource: prev.informationSource.filter((_, i) => i !== index)
    }));
  };

  const updateSource = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      informationSource: prev.informationSource.map((source, i) => 
        i === index ? { ...source, [field]: value } : source
      )
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-animation">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {event ? 'Edit Event' : 'Create New Event'}
          </h2>
          <button onClick={onClose} className="p-2">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Subtitle</label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-md min-h-32"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Event Image</label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />

              {previewImage ? (
                <div className="relative">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-md border"
                  />
                  <button
                    type="button"
                    className="absolute bottom-2 right-2 px-3 py-1 bg-white rounded-md text-sm shadow"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Change Image
                  </button>
                </div>
              ) : (
                <div
                  className="border-2 border-dashed rounded-md p-8 text-center cursor-pointer hover:bg-gray-50"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">Click to upload an image</p>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Key Information</h3>
            <div className="space-y-3">
              {formData.keyInformation.map((info, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-gray-500 mt-2">{index + 1}</span>
                  <input
                    type="text"
                    value={info}
                    onChange={(e) => updateKeyInformation(index, e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-md"
                    placeholder="Enter key information point"
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Information Sources</h3>
              <button
                type="button"
                className="inline-flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={addSource}
              >
                <Plus className="h-4 w-4" />
                Add Source
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formData.informationSource.map((source, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-end mb-2">
                    <button
                      type="button"
                      className="p-1 text-gray-500 hover:text-gray-700"
                      onClick={() => removeSource(index)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Source</label>
                      <input
                        type="text"
                        value={source.from}
                        onChange={(e) => updateSource(index, 'from', e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Person name or URL"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Topic</label>
                      <input
                        type="text"
                        value={source.topic}
                        onChange={(e) => updateSource(index, 'topic', e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Topic or discussion point"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {event ? 'Update Event' : 'Create Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}