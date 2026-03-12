---
slug: /flextrack/lommy_capture
id: lommy_capture
sidebar_label: Lommy Capture
sidebar_class_name: menu_item_tracker
---
# Flextrack - Lommy Capture

![Lommy Capture](./tracker.jpg)

Lommy Capture is a compact, installation-friendly GPS tracker purpose-built for persistent, low-maintenance monitoring of trailers, caravans and other towed assets. As a Plaspy compatible device, Lommy Capture delivers reliable real-time tracking and historical route retrieval while fitting discreetly inside a light housing — a design that helps fleet managers and logistics operators maintain continuous oversight without frequent service visits.

Designed for fleet management and anti-theft use cases, Lommy Capture uses energy harvesting from vehicle lighting circuits rather than a fixed battery. That unique power approach, combined with multi-constellation GNSS, cellular fallback and onboard sensors, makes Lommy Capture a practical choice for operators who need telemetry and location intelligence that integrates with Plaspy for alerts, geofencing and reporting.

## Key Highlights

- Plaspy compatible: integrates with Plaspy via open APIs and industry-standard data protocols for seamless real-time tracking.
- Energy harvesting operation: charges super-capacitors from tail, brake and indicator circuits — no dedicated battery required.
- Persistent reporting: when charged by tail lights, transmits as frequently as every 2 minutes; limited fallback reports when disconnected.
- Multi-constellation GNSS with SBAS and assisted positioning for fast, accurate fixes even in challenging environments.
- Robust cellular connectivity: intelligent 4G LTE Cat M1 with 2G quad-band fallback and advanced cellular triangulation if GNSS is unavailable.
- Compact, rugged form factor \(54 × 44 × 19 mm, 42 g\) rated IP65 for reliable field operation across -30 to +60 °C.
- Built-in 3-axis G-sensor and 2 MB internal flash for local logging of position and motion events.

## How It Works with Plaspy

Lommy Capture sends position, motion and alarm messages over UDP or SMS and can be integrated into Plaspy through open APIs or gateway ingestion. Once registered in Plaspy, fleets gain live position updates, configurable alarms and historical route playback for each trailer or towed asset. Plaspy can also combine Lommy Capture telemetry with other vehicle data to support broader fleet management workflows.

- Real-time location and telemetry updates: device transmits frequent fixes \(down to 2-minute intervals when tail lights supply power\).
- Disconnection and power alerts: device continues limited timed reports if a trailer is unplugged, enabling Plaspy to flag potential tampering or theft.
- Historical route retrieval: onboard flash memory supports storage and later upload of route data for compliance and analysis.
- Event-based messages: motion \(G-sensor\) and configurable alarms can trigger immediate notifications in Plaspy.
- Integration-ready data formats: UDP and SMS protocols allow Plaspy to parse position, alarm and telemetry payloads without proprietary gateways.

## Technical Overview

| Connectivity | 4G \(FDD LTE Cat M1\) with intelligent operation; 2G quad-band fallback |
| --- | --- |
| Bands | LTE Cat M1: B3 / B8 / B20. 2G: 850 / 900 / 1800 / 1900 MHz. |
| Power & Battery | Energy harvesting from lighting circuits; super-capacitors store charge. Operates on 4 V to 40 V systems. When powered by tail lights, reporting intervals can be as low as every 2 minutes. If disconnected from power, can send up to five position reports at 12-hour intervals until energy is depleted. |
| Interfaces | Four-wire installation: black = ground, brown = tail lights, red = brake lights, green = indicators. Install inside light housing; connections should be protected against water and moisture. |
| GNSS | Multi-constellation GNSS: GPS, GLONASS, GALILEO, BEIDOU, QZSS. SBAS support \(WAAS, EGNOS, MSAS, GAGAN\). Assisted GNSS for faster fixes. Tracking sensitivity down to -166 dBm. |
| Bluetooth | Not described for this model \(no BLE sensors specified\). |
| Remote Management | Integrates with Flextrack platforms \(TrackEye, LommyFleet, white-label solutions\) or customer systems via open APIs. Supports UDP and SMS data protocols for cloud ingestion. |
| Form Factor | Compact housing 54 × 44 × 19 mm; weight 42 g. IP65 rated. Operating temperature -30 to +60 °C. Internal GNSS and LTE/GSM antennas. 3-axis G-sensor and 2 MB internal flash. |

## Use Cases

- Fleet anti-theft and recovery: discreet internal installation inside light housings reduces visibility and makes removal difficult, while Plaspy-compatible alerts enable quick intervention.
- Trailer utilization & route monitoring: real-time tracking and historical routes help optimize trailer allocation and reduce empty miles in fleet management.
- Maintenance scheduling based on usage: motion and route telemetry feed into Plaspy reports to trigger service intervals based on real use rather than time alone.
- Geofencing & stop monitoring: set geofence alerts and monitor stops in Plaspy for improved logistics and on-time deliveries.
- Operational continuity for intermittent power assets: energy-harvesting design keeps assets visible even when there is no fixed power source.

## Why Choose This Tracker with Plaspy

Lommy Capture offers a pragmatic balance of low maintenance, discreet installation and robust positioning that aligns well with Plaspy’s real-time tracking and fleet management capabilities. Its energy-harvesting architecture eliminates battery swaps, reducing downtime and running costs for large trailer fleets. Because the device transmits over LTE Cat M1 with 2G fallback and supports UDP/SMS, integrating into Plaspy is straightforward — enabling consistent telemetry and alarm flows into your dashboards, geofencing rules and reporting pipelines.

For operations that require extended visibility without extensive retrofitting, Lommy Capture is a strong Plaspy compatible option. While the unit focuses on accurate location, motion sensing and resilient connectivity, Plaspy can augment those feeds with additional vehicle data — such as fuel monitoring, ignition state, immobilizer control or Bluetooth sensors managed by other onboard systems — to deliver a comprehensive telematics solution tailored to your fleet.

