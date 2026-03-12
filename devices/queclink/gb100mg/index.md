---
slug: /queclink/gb100mg
id: gb100mg
sidebar_label: GB100MG
sidebar_class_name: menu_item_tracker
---
# QuecLink - GB100MG

![GB100MG](./tracker.png)

The Queclink GB100MG is a compact, battery-mounted GPS tracker engineered for usage-based insurance \(UBI\) and fleet telematics and is Plaspy compatible for straightforward integration. Designed for fast, under-five-minute engine-compartment installation, the GB100MG delivers real-time tracking, high-resolution crash telemetry and reliable message delivery over global LTE Cat M1 / NB1 networks with 2G fallback. With internal antennas and an IP67-rated enclosure, it is built to operate reliably under the metal hood of modern vehicles.

The GB100MG supports advanced driver behavior monitoring and accident data capture while offering BLE 4.2 connectivity for wireless accessories. It buffers up to 10,000 messages and reports position and status over TCP, UDP or SMS, making it suitable for fleet management, anti-theft workflows and insurance telematics when paired with Plaspy’s platform. Note: GB100MG was announced as phased out \(Phase Out Time: 2022.9\); Queclink provides a one-year warranty and lifetime technical support for affected customers and recommends the GB130MG as a current replacement.

## Key Highlights

- Plaspy compatible GPS tracker optimized for UBI and fleet telematics — enables real-time tracking and telemetry integration.
- Global LTE Cat M1 / NB1 connectivity with EGPRS 2G fallback for wide-area coverage and resilient data delivery.
- Rugged, compact IP67 enclosure with internal antennas for fast, under-5-minute engine-compartment installation.
- High-resolution 6‑axis accelerometer sampling up to 1,600 Hz for accurate crash detection and reconstruction.
- BLE 4.2 support for Bluetooth sensors and accessories to extend telemetry \(temperature, door, cargo sensors, etc.\).
- Large buffer \(up to 10,000 messages\) and multiple reporting modes \(scheduled, distance, mileage\) for reliable fleet data capture.
- Autonomous GNSS accuracy under 2.5 m CEP \(Qualcomm receiver\) with fast TTFF for dependable real-time location.

## How It Works with Plaspy

When integrated with Plaspy, the GB100MG streams location, telemetry and event data to Plaspy’s cloud in real time \(or via scheduled batches\), enabling live dashboards, alerts and reports for fleet managers and insurers. The device supports TCP, UDP and SMS transport, so Plaspy can ingest data even when packet data is constrained. Plaspy leverages the GB100MG’s crash telemetry, driver behavior events and BLE sensor inputs to deliver actionable insights for coaching, claims handling and anti-theft workflows.

- Real-time location and telemetry updates via LTE Cat M1 / NB1 \(and 2G fallback\)
- High-rate accelerometer traces and crash detection data for accident reconstruction and claims support
- Virtual ignition detection using voltage and accelerometer signals — useful for ignition-based rules and immobilizer workflows when integrated with Plaspy
- Tow alarm and ignition-off monitoring to detect unauthorized movement and trigger anti-theft alerts
- BLE 4.2 sensor readings \(wireless accessories\) to extend telemetry for cargo, temperature or proximity monitoring
- Buffered messaging \(up to 10,000 messages\) with flexible reporting triggers \(time, distance, mileage\)

## Technical Overview

| Connectivity | LTE Cat M1 \(eMTC\) and Cat NB1 \(NB-IoT\) with EGPRS \(GPRS/EDGE\) 2G fallback |
| --- | --- |
| Bands | eMTC/NB1: B1/B2/B3/B4/B5/B8/B12/B13/B18/B19/B20/B25/B28; EGPRS: 850/900/1800/1900 MHz \(GPRS/EDGE multi-slot class 33\) |
| Power & Battery | Operating voltage 8–32 V DC; internal high-temperature NiMH backup battery, 200 mAh \(supports operation during power loss\) |
| Interfaces | Internal antennas for cellular, GNSS and Bluetooth; no external antenna ports documented |
| GNSS | Qualcomm GNSS receiver; autonomous position accuracy &lt;2.5 m CEP; TTFF: ~31 s \(cold\), 21 s \(warm\), 3 s \(hot\) |
| Bluetooth | BLE 4.2 for wireless accessories and sensor integration |
| Reporting & Protocols | TCP, UDP and SMS reporting; scheduled, distance and mileage-triggered reports; up to 10,000 message buffer |
| Sensors | Built-in 6-axis accelerometer with sampling up to 1,600 Hz for crash/accident data and driving behavior detection |
| Physical & Environmental | Dimensions: 134.6 × 67.5 × 14.8 mm; Weight: 130 g; IP67 enclosure; Operating temperature -30°C to +70°C; Storage -40°C to +70°C; Humidity 0–95% non-condensing |
| Indicators & Certifications | LEDs: GNSS, PWR, CELL. Certifications: FCC, CE, Verizon, PTCRB, AT&T |
| Remote Management | Not specified in device documentation provided |

## Use Cases

- Usage-based insurance \(UBI\) programs — collect driver behavior, crash telemetry and mileage to support risk scoring and premiums.
- Fleet management and driver coaching — monitor harsh braking, acceleration, idling and mileage to optimize operations and safety.
- Accident reconstruction and claims support — high-rate accelerometer sampling provides detailed crash event traces for insurers and investigators.
- Anti-theft and tow detection — ignition-off tow alarms and buffered reporting help detect and alert on unauthorized vehicle movement; can feed immobilizer workflows via Plaspy rules.
- Bluetooth sensor integration — extend vehicle telemetry with BLE accessories for cargo monitoring, temperature tracking or proximity sensing.

## Why Choose This Tracker with Plaspy

The GB100MG offers a focused feature set for companies deploying UBI and fleet telematics who require robust real-time tracking, high-fidelity crash data and flexible reporting modes. Its internal antennas and IP67-rated housing simplify installation in the engine compartment, reducing vehicle downtime and installation cost. When combined with Plaspy, fleets and insurers gain access to live dashboards, rules-based alerts and historic telemetry that support safety programs, anti-theft measures and operational telemetry.

Because the GB100MG is certified by major regulators \(FCC, CE, Verizon, PTCRB, AT&T\) and includes a high-rate accelerometer plus BLE support, it remains a reliable choice for existing installations. However, note that the GB100MG has entered phased-out status \(Phase Out Time: 2022.9\). Queclink continues to provide a one-year warranty and lifetime technical support for affected customers and recommends the GB130MG as the modern alternative for new deployments. For current Plaspy customers, the GB100MG delivers proven GPS tracker performance, dependable telemetry and straightforward Plaspy compatibility for fleet management, real-time tracking and insurance telematics.

