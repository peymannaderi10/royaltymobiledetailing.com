export function LocationMap() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Visit Our Shop
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conveniently located in Beverly/Edgewater Park, NJ with easy access from major highways
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="aspect-[16/10] bg-muted rounded-lg overflow-hidden">
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

          <div className="space-y-6">
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Directions</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>From Philadelphia:</strong> Take I-95 North to US-130 North, exit at Beverly
                </p>
                <p>
                  <strong>From Trenton:</strong> Take US-130 South, shop is on the right
                </p>
                <p>
                  <strong>From Camden:</strong> Take US-130 North, approximately 15 minutes
                </p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Parking</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Free customer parking available</p>
                <p>• Easy access for all vehicle types</p>
                <p>• Covered drop-off area</p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Service Area</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>We proudly serve:</p>
                <p>• Beverly & Edgewater Park</p>
                <p>• Burlington County</p>
                <p>• Greater Philadelphia area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
