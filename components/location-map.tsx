export function LocationMap() {
  return (
    <div className="h-full bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden shadow-lg border border-border/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.8!2d-74.9!3d40.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA2JzAwLjAiTiA3NMKwNTQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Steve's Auto Interior & Sunroofs Location"
          />
        </div>
      </div>
    </div>
  )
}
