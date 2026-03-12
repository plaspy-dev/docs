---
slug: /queclink/gl501mg
id: gl501mg
sidebar_label: GL501MG
sidebar_class_name: menu_item_tracker
---
# QuecLink - GL501MG

![GL501MG](./tracker.png)

The Queclink GL501MG is a compact, battery-powered GPS tracker designed for long-term unattended asset monitoring and is Plaspy compatible out of the box. Based on the proven GL500MG platform, the GL501MG adds LTE Cat M1 / NB1 connectivity with 2G fallback, Qi wireless charging and Bluetooth Low Energy \(BLE\) to deliver reliable real-time tracking and low-power telemetry for lot management, cold-chain and warehouse assets.

Engineered for durability and low maintenance, the GL501MG combines an internal u‑blox GNSS receiver \(\<2.5 m CEP autonomous\), IP67 waterproofing, internal temperature and light sensors, and an ultra low standby current to provide up to one year of standby life at one report per day. Its sealed enclosure, internal antennas and optional magnetic case make it easy to deploy while maintaining a secure, Plaspy-compatible data feed for fleet management, anti-theft monitoring and environmental telemetry.

## Key Highlights

- Plaspy compatible GPS tracker with LTE Cat M1 / Cat NB1 and EGPRS \(2G\) fallback for global coverage and low-power reporting.
- High-sensitivity u‑blox GNSS with \<2.5 m CEP autonomous accuracy and fast TTFF for dependable real-time tracking.
- Long battery life from an internal 3.7V / 2400mAh Li‑Polymer battery and ultra low standby \(\<10 µA\) — up to one year at 1 report/day.
- Built-in BLE 4.2 for accessory connectivity and configuration, enabling Bluetooth sensors and proximity workflows.
- IP67 waterproof enclosure, internal sensors \(temperature and light\) and internal 3-axis accelerometer for telemetry and tamper detection.
- Qi wireless charging \(5V/1A\) and vibration motor for convenient user operation; optional magnetic-case mounting for metal surfaces.
- Plaspy-ready data transport via @Track protocol over TCP, UDP or SMS to support scheduled reports, wake-up events and alerts.

## How It Works with Plaspy

The GL501MG transmits location and onboard telemetry using the @Track protocol and supports TCP, UDP or SMS transport, making it straightforward to integrate with Plaspy’s ingestion endpoints. Once paired in Plaspy, the tracker supplies frequent location updates, motion and tamper signals, and internal sensor readings so you can monitor assets in real time and trigger automated workflows.

- Real-time location and telemetry updates via LTE Cat M1/NB1 \(with 2G fallback\) for resilient connectivity.
- Onboard status: motion, low battery alarm, tamper \(light sensor + accelerometer\) and wakeup reports for reliable anti-theft alerts.
- Internal temperature sensor and light sensor telemetry suitable for cold-chain or warehouse environmental monitoring.
- BLE 4.2 support for Bluetooth sensors and accessory pairing to extend telemetry capabilities \(e.g., temperature probes or beacons\).
- Flexible reporting: scheduled timing reports, intelligent reporting frequency adjustment and up to 20 internal geo-fence regions for geofencing alerts in Plaspy.

## Technical Overview

| Connectivity | LTE Cat M1 \(eMTC\) and Cat NB1 \(NB-IoT\) with EGPRS \(2G\) fallback |
| --- | --- |
| Bands / Data Rates | Global Cat M1/Cat NB1 bands supported; eMTC DL/UL up to 375 Kbps; NB1 lower-rate options; 2G fallback for legacy coverage |
| Power & Battery | Internal Li‑Polymer 3.7V / 2400mAh battery; ultra low standby current &lt;10 µA; Qi wireless charging input 5V/1A \(use approved chargers\) |
| Interfaces & Indicators | Single function button \(power/status\); GNSS and CEL LED indicators; internal vibration motor for haptic feedback |
| Onboard Sensors | u‑blox GNSS receiver \(&lt;2.5 m CEP autonomous\), internal temperature sensor, light sensor, internal 3-axis accelerometer \(motion detection\) |
| GNSS | u‑blox GNSS, high sensitivity, fast TTFF, \<2.5 m CEP \(autonomous\) |
| Bluetooth | BLE 4.2 for accessory connectivity and configuration \(Bluetooth sensors / beacons\) |
| Data Protocol & Transport | @Track protocol; TCP, UDP, SMS transport for telemetry and position reports |
| Form Factor & Durability | Dimensions: 87 × 51 × 30 mm \(standard\) or 87 × 51 × 33.5 mm \(magnetic case\); Weight ~150 g \(170 g magnet version\); IP67; operating temp -20 °C to +60 °C |
| Certifications & Support | FCC, Verizon, CE, MIC; 1-year warranty; Queclink lifetime technical support \(EOL note below\) |

## Use Cases

- Fleet management and lot tracking: monitor trailers, equipment and parked vehicles with long battery life and geofence alerts.
- Anti-theft and tamper detection: motion alerts, light/tamper sensing and wake-up reports integrated into Plaspy for immediate response.
- Cold-chain and warehouse environmental monitoring: internal temperature telemetry and BLE sensor integration for cargo condition tracking.
- Remote asset standby tracking: long unattended deployments where infrequent reporting preserves battery life yet delivers timely location and telemetry.

## Why Choose This Tracker with Plaspy

The GL501MG is a value-oriented Plaspy compatible GPS tracker when you need long-life, low-power asset monitoring with modern LTE IoT connectivity. Its proven u‑blox GNSS performance and high-sensitivity reception deliver dependable real-time tracking, while internal sensors and BLE extend telemetry capabilities for environmental monitoring and tamper detection. The sealed IP67 design, Qi charging convenience and optional magnetic mounting simplify installation for fleet management and lot scenarios.

Connectivity via LTE Cat M1/NB1 with 2G fallback plus @Track/TCP/UDP/SMS transport makes integration with Plaspy straightforward, enabling alerts, geo-fence events and scheduled reports. For functions such as fuel monitoring, ignition or remote immobilizer control, consult your Plaspy integration plan and accessory options — the GL501MG provides reliable telemetry and Bluetooth sensor connectivity as a foundation for those workflows.

Please note: the GL501MG carries an End-of-Life \(EOL\) / Phase Out notice from Queclink. Queclink has ceased accepting orders for this model and recommends the GL521MG as the alternative. Queclink provides a one-year warranty and lifetime technical support for customers affected by the phase out. For new deployments, confirm availability and recommended replacement models with your supplier or Plaspy account manager.

