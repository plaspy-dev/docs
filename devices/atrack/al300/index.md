---
slug: /atrack/al300
id: al300
sidebar_label: AL300
sidebar_class_name: menu_item_tracker
---
# ATrack - AL300

![AL300](./tracker.jpg)

# AL300 GPS Tracker

The AL300 is a rugged, Plaspy compatible GPS tracker engineered for demanding fleet management and heavy-equipment telematics. With IP67 waterproofing, MIL‑STD‑810G and SAE J1455 vibration compliance, the AL300 reliably delivers real-time tracking and telemetry over LTE \(Cat.M1 / Cat.1\) and legacy GSM networks. It is designed to integrate seamlessly with Plaspy for location, event alerts, and data-driven fleet optimization.

The device is available in regional cellular variants \(AL300‑MG, AL300‑MX, AL300‑LE\) and supports UDP/TCP, MQTT and SMS over IMS for flexible data transport to Plaspy. Optional CAN Bus and Bluetooth Low Energy \(v5.1\) expand vehicle diagnostics, fuel monitoring, and sensor integration, enabling rich telemetry and anti-theft workflows when paired with Plaspy dashboards and alerting rules.

## Key Highlights

- Plaspy compatible for seamless GPS tracker integration, real-time tracking, and fleet management dashboards.
- Rugged IP67, flame‑retardant enclosure and vibration/shock compliance for heavy machinery and harsh environments.
- Multi‑network connectivity: LTE Cat.M1 / Cat.1 variants plus legacy GSM to maintain coverage where needed.
- Optional CAN Bus \(ISO 15765‑4, SAE J1939\) for vehicle telemetry: mileage, speed, fuel consumption and battery level.
- Optional Bluetooth sensors support \(BLE v5.1\) for wireless peripheral monitoring and mobile app pairing.
- Low power draw with deep sleep mode and a 650 mAh backup battery for short offline reporting and graceful shutdown.
- Flexible transport: UDP/TCP, MQTT and SMS over IMS to feed Plaspy with telemetry, alerts and queued logs.

## How It Works with Plaspy

The AL300 sends position fixes, telemetry and event data to Plaspy using configurable transport protocols \(UDP/TCP, MQTT or SMS over IMS\). When integrated, Plaspy ingests GNSS coordinates, CAN-derived vehicle parameters and BLE sensor readings to provide real-time tracking, geofence alerts, and historical reports. Internal logging and queuing ensure no data loss during temporary coverage gaps.

- Real-time location and telemetry updates: GNSS coordinates, speed, heading, timestamp.
- Vehicle telemetry via optional CAN: mileage, engine metrics, fuel monitoring and battery state.
- Ignition state monitoring via ignition input; digital output available for remote control or immobilizer integration when configured.
- Accelerometer events \(3‑axis ±16 g\) for harsh‑drive, collision detection, and motion-triggered alerts.
- Bluetooth sensors: integrate temperature, door, or trailer sensors and forward readings to Plaspy.
- Onboard memory \(16 Mbit\) stores up to 12,000 logs and 10,000 queued messages for later upload to Plaspy.

## Technical Overview

| Connectivity | LTE Cat.M1 and Cat.1 variants; legacy GSM support where required. |
| --- | --- |
| Variants / Regional Support | AL300‑MG \(global LTE Cat.M1\), AL300‑MX \(North America\), AL300‑LE \(EMEA/APAC LTE Cat.1\); selected variants list carrier compatibility \(AT&T, Verizon for North America\). |
| Protocols | UDP, TCP, MQTT and SMS over IMS for data transport to servers such as Plaspy. |
| Power & Battery | Vehicle 12 V / 24 V operation; typical current draw 100 mA @12 V during operation, 2.4 mA in deep sleep; 3.7 V, 650 mAh Li‑ion backup battery. |
| Interfaces | Multiple I/O variants: digital inputs, RS232 serial port, CAN H/L \(optional\), ignition input, one digital output \(max sink 300 mA\), two status LEDs \(GPS/cellular\). |
| GNSS | Internal GPS & GLONASS receiver: 33 tracking / 99 acquisition channels, SBAS support \(WAAS/EGNOS/GAGAN/MSAS\), location accuracy ~2.5 m CEP. |
| Bluetooth | Optional Bluetooth Low Energy v5.1 for sensor integration and mobile connectivity. |
| Memory & Logging | 16 Mbit internal flash; stores up to 12,000 logs and 10,000 queued messages for deferred upload. |
| Sensors | 3‑axis accelerometer \(±16 g\) for movement and impact detection; vehicle telemetry via CAN when equipped. |
| Environmental & Certifications | IP67 waterproof, operating temperature −20 °C to 60 °C, 95% RH non‑condensing; MIL‑STD‑810G and SAE J1455 vibration/shock; CE, FCC, IC, TELEC, PTCRB, RoHS. |
| Form Factor | Compact flame‑retardant PC enclosure ~88.9 × 76.5 × 21.2 mm \(with bracket\), ≈150 g; multiple mounting options \(screw bracket, adhesive, cable tie\). |
| SIM & Antenna | NanoSIM \(4FF\) slot; embedded cellular antenna. |

## Use Cases

- Fleet management: live vehicle tracking, route replay and driver behavior analysis to reduce operating costs.
- Anti‑theft and remote immobilization: ignition monitoring and digital output for remote control or immobilizer workflows via Plaspy.
- Heavy equipment & agricultural machinery monitoring: vibration, runtime and CAN-derived engine data for preventive maintenance.
- Fuel monitoring and cost control: fuel consumption telemetry \(via CAN\) fed into Plaspy reports and alerts.
- Sensorized trailers and assets: BLE sensors for temperature, door status or cargo monitoring combined with GPS location.

## Why Choose This Tracker with Plaspy

The AL300 GPS tracker brings together rugged hardware and flexible connectivity to deliver dependable real-time tracking, telemetry and anti-theft capabilities when paired with Plaspy. Its regional LTE variants and legacy GSM support ensure reliable cellular coverage, while protocol options \(UDP/TCP/MQTT/SMS over IMS\) make integration straightforward for large or distributed fleets. Optional CAN Bus and BLE broaden telemetry and sensor coverage for fuel monitoring, engine diagnostics and peripheral sensors—feeding Plaspy with the data needed to optimize routing, reduce downtime and improve fleet safety. Low power modes, onboard logging and robust environmental ratings make the AL300 a practical choice for vehicle, construction and agricultural deployments that require scalable, Plaspy compatible telematics.

  \<meta itemprop="model" content="AL300">

