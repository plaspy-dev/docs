---
slug: /queclink/gb100p
id: gb100p
sidebar_label: GB100P
sidebar_class_name: menu_item_tracker
---
# QuecLink - GB100P

![GB100P](./tracker.png)

The Queclink GB100P is a compact, battery-mounted GPS tracker engineered for low-cost, reliable telematics and designed to be Plaspy compatible for seamless integration into usage-based insurance \(UBI\) and automobile finance programs. With an internal u‑blox All‑in‑One GNSS receiver, quad‑band GSM/GPRS reporting and BLE 4.2 support, the GB100P delivers high-rate telemetry, crash-event capture and compact installation that suit engine-compartment mounting in large-scale deployments.

Built to operate in harsh vehicle environments, the GB100P combines IP65 protection, a high‑temperature internal NiMH backup battery and a 6‑axis inertial sensor suite \(3‑axis accelerometer up to 1600 Hz plus MEMS gyroscope\) to supply accurate crash data and advanced driving behavior monitoring. Although Queclink has issued an EOL \(end-of-life\) notice for the GB100P \(orders ceased November 15, 2024\), the device remains a proven option for existing insurers and fleet managers who require robust message buffering and precise telemetry with Plaspy; recommended replacements are the GB130MG and GB100CG for new projects.

## Key Highlights

- Plaspy compatible GPS tracker: integrates GPS and sensor data for reliable real-time tracking and telemetry in telematics platforms.
- High-rate inertial sensing: 6‑axis suite with accelerometer sampled up to 1600 Hz and MEMS gyroscope enables accurate crash-event capture and aggressive driving detection.
- Quad‑band GSM/GPRS connectivity \(850/900/1800/1900 MHz\) with TCP/UDP/SMS reporting for global position reporting and low-bandwidth scenarios.
- BLE 4.2 support for Bluetooth sensors and beacons, extending telemetry to driver ID, accessory sensors or cabin monitoring via Plaspy integration.
- Robust data retention: on‑device buffering up to 10,000 messages and compressed 1‑second GPS packets to preserve data during intermittent connectivity.
- Rugged design: IP65 waterproof enclosure, internal high‑temperature NiMH backup battery \(200 mAh\), and stable performance across engine‑compartment installations.

## How It Works with Plaspy

When paired with Plaspy, the GB100P forwards location and high‑resolution telemetry to Plaspy’s cloud for real‑time tracking, event alerts and historical reporting. Plaspy ingests compressed GPS packets, inertial crash packets and BLE accessory data to produce actionable insights for fleet management, UBI scoring and post‑incident analysis. Buffering and message compression ensure data continuity in areas with intermittent GSM coverage — messages stored on the GB100P are transmitted to Plaspy when a connection is reestablished.

- Real-time location and telemetry updates via TCP, UDP or SMS to Plaspy
- High-rate crash and driving-behavior data \(pre/post‑event packets for incident analysis\)
- Geo-fence, parking alarms \(up to 20 regions\), speed and aggressive driving alerts
- Buffered message delivery \(up to 10,000 messages\) for reliable telemetry in intermittent networks
- Bluetooth sensors support — BLE 4.2 integration for accessory telemetry and beacon-based workflows

## Technical Overview

| Connectivity | Quad‑band GSM/GPRS \(TCP, UDP, SMS\) |
| --- | --- |
| Bands | 850 / 900 / 1800 / 1900 MHz \(GPRS multi‑slot class 10\) |
| Power & Battery | Operating voltage 8–32 V DC; internal high‑temperature NiMH backup battery, 200 mAh |
| Interfaces | Internal GSM, GNSS and BLE antennas; LED indicators for GSM, GPS and power status \(external I/O such as immobilizer outputs not specified\) |
| GNSS | u‑blox All‑in‑One GNSS; tracking sensitivity down to −162 dBm; position accuracy CEP &lt; 2.5 m; TTFF ~27 s \(cold/warm average\), ~1 s \(hot\) |
| Bluetooth | BLE 4.2 for sensors and beacons |
| Inertial Sensors | 6‑axis suite: 3‑axis accelerometer \(sampled up to 1600 Hz\) and MEMS gyroscope; crash packets capture up to 15 s before and after an event |
| Data Handling | Compressed 1‑second GPS packets while in motion; message buffer capacity up to 10,000 messages; geo‑fence and parking alarms \(up to 20 regions\) |
| Environmental | Dimensions 91.5 × 51.5 × 11 mm; weight 75 g; operating −20 °C to +70 °C; humidity 0–95% non‑condensing; IP65 enclosure |
| Product Status | Queclink EOL notice: orders ceased November 15, 2024. Production, bug fixes and support timelines were provided by Queclink; recommended replacements are GB130MG and GB100CG. |

## Use Cases

- Usage‑based insurance \(UBI\): high‑rate accelerometer and crash packets support event reconstruction and risk scoring for insurance telematics programs.
- Automobile finance and asset recovery: battery‑mounted form factor and buffered reporting assist in locating financed vehicles and managing repossessions.
- Fleet management in intermittent coverage areas: large message buffer and compressed reporting keep vehicle telemetry intact until Plaspy receives data.
- Driver behavior and safety programs: aggressive driving detection, speed alarms and high‑frequency inertial telemetry feed Plaspy dashboards for coaching and compliance.
- Bluetooth sensor workflows: BLE beacons and accessories for driver ID, accessory state or proximity‑based automation when integrated through Plaspy.

## Why Choose This Tracker with Plaspy

The GB100P offers a balanced combination of precise GPS, high‑frequency inertial sensing and BLE extensibility that makes it a strong choice for Plaspy‑based telemetry deployments emphasizing crash detection, UBI analytics and robust data retention. Its compact, waterproof design and internal high‑temperature battery enable discreet engine‑compartment installation and stable performance under challenging conditions. For fleets and insurers that need continuous telemetry and dependable message buffering in networks with intermittent coverage, pairing the GB100P with Plaspy provides reliable real‑time tracking, telemetry and post‑event analysis.

Note on capabilities: the GB100P is optimized for GPS/telemetry, crash data and BLE accessories. If you require integrated fuel monitoring, dedicated ignition or immobilizer outputs, review Plaspy integration options and the recommended replacement models \(GB130MG, GB100CG\) which Queclink suggests for future purchases and extended I/O feature sets.

