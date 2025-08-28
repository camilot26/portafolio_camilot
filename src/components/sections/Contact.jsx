import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contacto</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">¡Hablemos!</h3>
            <p className="text-gray-300 mb-8">
              ¿Tienes un proyecto en mente? Me encantaría conocer tus ideas 
              y ayudarte a hacerlas realidad.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-blue-400">📧</span>
                <span>camilo@tejada.dev</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400">📱</span>
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400">📍</span>
                <span>Medellín, Colombia</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Tu mensaje..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-semibold"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;