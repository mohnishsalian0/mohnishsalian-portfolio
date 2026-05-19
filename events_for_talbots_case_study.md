# Events for Talbots
## Designing an Enterprise Events Platform That Turns Trunk Shows into Bookable Experiences

> 📸 **[IMAGE: Hero shot. A polished mockup of the final product, either the events list page or the booking journey. Pick your strongest screen and present it in a device frame or on a clean background.]**

---

### At a Glance

**Client:** Talbots (via JRNI platform)
**Role:** Sole UX Designer & Frontend Developer
**Team:** VP of Product, Product Manager, Engineering Manager, Developers, QA
**Duration:** 1 year
**What I did:** Led end-to-end UX: client interviews, competitor research, user flows, wireframes, prototyping, design validation. Designed and helped build the landing page builder and events list page in React.
**Impact:** Platform live with Baby Bunting (Australia), with Total Wine and ANZ in adoption. Designed around Talbots' workflow of 1,000+ annual trunk show events managed on Excel.

---

### The Starting Point

JRNI had built its name on appointment bookings. The platform was solid there: reliable, scalable, trusted by enterprise clients. But the events module was a different story. It existed, technically. A handful of clients used it. The UX was built on Rails with forms rendered entirely from the backend, which meant limited interactivity and a rigid experience. It worked, but barely, and nobody was excited about it.

> 📸 **[IMAGE: Screenshot of the old events module (if available). Even a partial or blurred view helps establish the "before" state. If unavailable, a brief annotated description of the old UI's limitations works too.]**

The company saw a clear opportunity: if we already own the appointments space, extending into events (and connecting the two) puts us in a position nobody else in the market occupies. Eventbrite does events well. Calendly does appointments well. Nobody was doing both, and certainly not at enterprise scale with service bookings woven directly into the event experience.

Talbots was the client that made this concrete. They run thousands of trunk show events every year across hundreds of stores in multiple regions. Their marketing teams coordinate all of it. And at the time, they were managing it on spreadsheets.

---

### What I Found During Discovery

I ran interviews with Talbots' team and other prospective clients to understand how they actually managed events day-to-day. A few things became clear fast.

**The spreadsheet problem was worse than it sounded.** It wasn't just that they used Excel. Every regional marketing team had their own spreadsheet, their own process, their own way of tracking registrations. There was no single source of truth for which events were happening where, who was registered, or whether staff had been assigned.

**Service bookings during events were the missing piece.** Talbots' trunk shows aren't passive. Customers come in, browse the collection, and need one-on-one time with staff in fitting rooms. The old events module had no concept of this. Customers registered for an event but couldn't book a service slot. Staff allocation was a separate, manual process that happened a day or two before the event.

**They wanted to promote events, not just manage them.** Clients kept asking for a way to build branded landing pages for their events, something they could drop into email campaigns. The existing module had no public-facing presence at all.

**Competitor research confirmed the gap.** I looked at Eventbrite, Eventfarm, and similar platforms. They had useful features we noted: invite-only events, tiered ticketing (paid, free, VIP), rich event pages. But none of them offered service association. None of them connected an event registration to an appointment slot. That was our angle.

> 📸 **[IMAGE: Competitor analysis summary. Could be a comparison table, annotated competitor screenshots, or a feature matrix showing where JRNI's service association fills the gap.]**

---

### Designing the Platform

The product had two distinct sides, and each needed its own design approach.

**Studio (the admin side)** is where marketing teams and store managers create events, build landing pages, link services, and manage attendees. The core challenge here was scale, since Talbots needs to spin up hundreds of events across stores simultaneously.

**Event Journey (the customer side)** is the public-facing booking flow where customers discover events, register, select service slots, and manage their bookings.

#### The Bulk Operations Problem

For Talbots' use case, event creation had to work at scale. One marketing manager in a region might need to push the same trunk show template to 50 stores at once. We solved this with a template-based bulk import system:

1. Create an event template at the parent (regional) level
2. Optionally build a landing page for it
3. Use bulk import to push the template to selected child locations (individual stores)
4. Later, use bulk assignment to allocate staff and fitting rooms across those events, typically a day or two before the event

This meant a regional marketing team could set up an entire season's worth of events in a fraction of the time it took them in Excel.

> 📸 **[IMAGE: Events list page in Studio showing events across locations with status indicators (Fully booked, Live, Registrations open, Draft, etc.). Your screenshot 1 works here.]**

#### Service Association: The Feature Nobody Else Had

This was where JRNI's appointment DNA paid off. We designed a system where clients could associate services directly with an event, with granular control:

- **Mandatory services:** A single service (like a fitting room session) that every customer must book as part of registration. This guaranteed staff could plan for one-on-one time with each attendee.
- **Optional add-on services (upsell):** Additional services customers could choose to add to their booking. These could be scheduled before, during, or after the event, each with its own bookable time range that admins could configure independently. Because these services plugged directly into JRNI's appointment booking module, they came with built-in staff scheduling, resource allocation, and calendar management.

From the customer's perspective, this felt natural. You're registering for a trunk show, you pick your fitting room slot, you optionally upsell yourself on a styling consultation, all in one flow.

> 📸 **[IMAGE: The service association configuration UI in Studio, showing how admins link mandatory and optional services to an event. If you have a screenshot of this admin flow, it belongs here.]**

#### The Landing Page Builder

Clients needed to promote events through their marketing campaigns, which meant they needed branded, shareable event pages. But they didn't need (or want) a full-blown page builder.

I interviewed clients about what they actually needed on these pages. The answer was consistent: a banner image, event description, agenda, related services, and a registration button. No one asked for drag-and-drop layout control or pixel-level customisation.

So I designed a builder with structured, toggleable sections. Each section (Banner Image, Event Description, Agenda, Related Services) can be switched on or off. Content is editable within each section. Clients pick a branding theme and a layout template, and the page assembles itself. The constraint was the feature: it meant any store manager could build a polished event page in minutes without design skills, and every page stayed on-brand. We also built in additional sections like Speakers that Talbots didn't need for trunk shows, but other clients running panel discussions or educational sessions would find useful.

> 📸 **[IMAGE: Landing page builder with the toggle panel on the left and live preview on the right. Your screenshot 2 works here. Consider also showing a finished landing page as it appears to customers.]**

I designed the builder and helped the team build it in React, both the builder interface in Studio and the actual rendered landing pages. The tech stack was part of a broader migration from AngularJS and Rails to React across JRNI's products.

---

### The Single-Page Decision

This was the most contested design choice on the project, and the one I'm most proud of.

JRNI's existing booking journey used a multi-page wizard, one step per page. For appointment bookings, this made sense because each step depended on the previous one (your service options change based on the location you selected, your time slots change based on the service you picked, and so on).

But the event journey is fundamentally different. It's closer to a long form than a dependent sequence.

> 📸 **[IMAGE: Side-by-side or before/after comparison showing the old multi-page wizard flow vs. the new single-page accordion flow. Even a simplified diagram of "Page 1 → Page 2 → Page 3 → Page 4" vs. "Single page with expandable sections" would communicate the difference clearly.]** You're selecting tickets, picking a date, choosing add-on services, and entering your details. These steps had no dependencies on each other. Splitting them across separate pages added unnecessary friction: extra page loads, lost context, a feeling of the process being longer than it actually was.

I proposed a single-page flow with accordion sections. All steps visible on one page, expandable as the customer progresses. A sticky registration summary on the side keeps context visible throughout.

The VP pushed back. The new flow would take longer to build than reusing the existing multi-page pattern. It was a reasonable concern, since we had a deadline and a client waiting.

I made the case in a team-wide discussion. The event journey wasn't an appointment journey, and treating it like one would inherit UX problems that didn't need to exist. I verified the technical feasibility with the engineering team, and they confirmed it was doable within the timeline with some adjustments. The VP agreed to go with the new flow.

The result was a booking experience that felt lighter and faster, even though it captured the same information. Customers could see the full scope of the registration upfront, which reduced drop-off anxiety.

> 📸 **[IMAGE: The final single-page event booking journey with accordion sections and the sticky registration summary sidebar. Your screenshot 3 works here. If you have a version showing an expanded service selection step, include that too.]**

---

### Rollout and Adoption

We didn't just ship the feature and walk away. The rollout was structured:

- **Internal training:** Conducted sessions with the Customer Success Management team, who handle client implementations. They needed to understand the new module deeply enough to configure it for each client's specific needs.
- **Documentation:** Wrote help docs covering event creation, bulk import, landing page setup, service association, and the booking journey.
- **Feedback loops:** Set up recurring sessions with the CSM team to collect field feedback: what clients were asking for, where they were getting stuck, what needed refinement.

We'd built the platform with Talbots' trunk show workflow in mind, but the architecture was flexible enough to support very different event types. Baby Bunting in Australia started adopting it for in-store parenting events. Total Wine began using it for tasting events. ANZ explored it for customer education sessions. Each had different configurations (different service types, different booking flows, different landing page needs) but the same underlying platform supported all of them.

---

### What I'd Do Differently

**Metrics.** I wish I'd pushed harder to establish baseline measurements before launch: how long event setup took in Excel, registration completion rates on the old module, customer no-show rates. Without that data, I can describe the improvement qualitatively but can't quantify it precisely. For any future project of this scale, I'd bake measurement into the project plan from day one.

**The email gap.** We designed the system to send booking confirmations automatically, and service confirmations went out separately. But event reminders (the "your trunk show is in 3 days" and "thank you for attending" messages) weren't part of the initial build. Clients had to use their own tools (Mailchimp, their CRM portal) for those. I had a vision for an email template builder similar to the landing page builder, but it didn't make the cut for V1. It's a feature that would have made the platform feel more complete.

---

### What I Took Away

This was the largest project I'd owned at the time, from early client interviews through to writing help docs after launch. The technical range was wide: UX research, interaction design, prototyping, React development, stakeholder management, and post-launch support all within the same year.

The moment that sticks with me is the single-page flow discussion. It taught me that design advocacy isn't about being right. It's about doing the homework so you can make a clear, grounded argument when it counts. I'd verified feasibility with engineering before the meeting. I could explain why the existing pattern didn't fit the new context. And I was specific about the tradeoffs rather than framing it as a no-brainer. That's the approach I've carried into every project since.

The broader lesson was about designing for a market position, not just a feature request. We weren't building "events" in isolation. We were connecting events to JRNI's core strength, appointments, and that integration (mandatory service bookings inside events) became the thing that differentiated the product. Talbots validated the idea, but the fact that it generalised to Baby Bunting, Total Wine, and ANZ confirmed that we'd built something with a longer shelf life than a single client's requirements.

### A Note on Honesty

Talbots was the client that shaped this product, but they haven't gone live with it. Internal priorities on their side shifted, and the rollout stalled. Baby Bunting, on the other hand, did go live and is actively using the platform for their in-store events. I mention this because I think it's worth being upfront: not every project you design ships the way you planned it. The work was real, the problems were real, and the platform is in production. It just landed with a different client first.
