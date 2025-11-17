import React from "react";

const Map = () => {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6630031448144!2d85.31829767489073!3d27.665896276206386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19000a4f32cf%3A0x53f71813950137ff!2sEvolve%20IT%20Hub!5e0!3m2!1sen!2snp!4v1762928419512!5m2!1sen!2snp"
        width="100%"
        height="100%"
        referrerPolicy="no-referrer-when-downgrade"
        title="Evolve IT Hub Location"
      ></iframe>
    </div>
  );
};

export default Map;
