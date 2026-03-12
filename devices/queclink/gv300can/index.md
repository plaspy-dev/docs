---
slug: /queclink/gv300can
id: gv300can
sidebar_label: GV300CAN
sidebar_class_name: menu_item_tracker
---
# QuecLink - GV300CAN

![GV300CAN](./tracker.png)

The Queclink GV300CAN is a third‑generation vehicle GPS tracker designed for robust fleet management, cold‑chain logistics and transportation monitoring. Plaspy compatible out of the box, the GV300CAN pairs reliable GNSS positioning from a u‑blox All‑in‑One receiver with GSM/GPRS communication to deliver real‑time tracking, scheduled telemetry and event‑driven reporting for fleets and high‑value vehicles.

Built for integration, the GV300CAN supports TCP/UDP and SMS transport and Queclink’s proprietary @Track protocol, enabling Plaspy to ingest location, CANBus vehicle data, alarms and sensor telemetry. The unit’s expandable I/O, CAN/J1708 support and onboard accelerometer make it practical for anti‑theft workflows, fuel monitoring, crash detection and remote immobilizer control when managed through Plaspy.

## Key Highlights

- Plaspy compatible GPS tracker for accurate, real‑time tracking of vehicles and assets.
- GNSS performance from a u‑blox All‑in‑One receiver with position accuracy &lt;2.5 m CEP and sensitivity to −162 dBm.
- Quad‑band GSM/GPRS \(850/900/1800/1900 MHz\) with TCP/UDP/SMS transport for continuous telemetry and scheduled reporting.
- CANBus and J1708 support for direct vehicle telemetry — integrate engine, speed and diagnostic data into Plaspy.
- Extensive alarm set including geo‑fence, parking, tow, crash detection and low backup battery alerts for timely incident response.
- Configurable fuel level sensing and temperature monitoring via 1‑wire sensors to support cold‑chain monitoring and fuel management.
- Remote control of digital outputs for immobilizer workflows and anti‑theft response when combined with Plaspy command-and-control.
- Compact, rugged form factor with wide operating voltage \(8–32 V DC\) for versatile vehicle installation.

## How It Works with Plaspy

When integrated with Plaspy, the GV300CAN streams GNSS positions, CANBus frames and digital/analog input events into Plaspy’s real‑time tracking and reporting platform. Plaspy uses the device’s TCP/UDP or SMS transport to receive scheduled updates by time, distance or mileage, and to trigger alerts and automated workflows based on incoming telemetry.

- Real‑time location and telemetry updates delivered via TCP/UDP or SMS to Plaspy for live map tracking.
- CANBus/J1708 vehicle data capture relayed to Plaspy for engine status, speed and diagnostic telemetry.
- Fuel monitoring and temperature telemetry available to Plaspy through analog inputs and 1‑wire sensors for cold‑chain and fuel optimization.
- Remote immobilizer and digital output control — Plaspy can issue commands to lock or disable vehicles when required.
- Bluetooth \(BLE\) antenna support facilitates integration with BLE sensors and beacons where used alongside Plaspy monitoring.

## Technical Overview

| Connectivity | GSM/GPRS \(quad‑band\), TCP/UDP/SMS transport; Queclink @Track protocol |
| --- | --- |
| Bands | Quad‑band GSM: 850 / 900 / 1800 / 1900 MHz \(GPRS multi‑slot class 10\) |
| Power & Battery | Operating voltage 8–32 V DC; internal 250 mAh Li‑Polymer backup battery; low backup battery alarm |
| Interfaces | RS232 \(16‑pin Molex\), 1 positive + 2 negative digital inputs, 1 analog input \(0–12 V or 0–30 V selectable\), 1 digital output + 1 latched digital output \(open drain, 150 mA max\), mini USB |
| GNSS | u‑blox All‑in‑One receiver; sensitivity to −162 dBm; position accuracy &lt;2.5 m CEP; internal/external GNSS antenna support |
| Bluetooth | Internal GSM/BLE antenna support \(enables BLE sensor/beacon integration where used\) |
| Remote Management | Remote OTA control of digital outputs; mini USB for debugging and firmware upgrades; protocol support for remote reporting and commands |
| Form Factor | 80 × 48 × 25 mm; 72 g; operating temp −30 °C to +80 °C \(storage −40 °C to +80 °C\) |
| Certifications & Warranty | FCC, CE, E‑Mark, Anatel; one‑year warranty for affected customers and lifetime technical support from Queclink |

## Use Cases

- Fleet management: continuous location, driver events and CAN telemetry feed Plaspy dashboards for route compliance and utilization analytics.
- Cold‑chain logistics: temperature monitoring via 1‑wire sensors and scheduled reporting keeps perishable shipments visible inside Plaspy.
- Anti‑theft and immobilization: geo‑fence, tow and low battery alarms plus remote digital output control enable fast intervention through Plaspy.
- Fuel monitoring and telemetry: analog fuel level sensing and CAN data help reduce fuel loss and support cost tracking in Plaspy reports.
- Incident capture and reconstruction: built‑in 3‑axis accelerometer and crash detection provide event data for post‑incident analysis.

## Why Choose This Tracker with Plaspy

The GV300CAN offers a balanced mix of vehicle‑grade hardware and flexible interfaces that make it a practical choice for Plaspy customers focused on real‑time tracking, telemetry and anti‑theft workflows. Its CAN/J1708 support lets Plaspy ingest detailed vehicle data alongside GNSS positions, while configurable alarms and inputs support use cases from cold‑chain temperature monitoring to fuel management and immobilization. The compact form factor, wide voltage range and rugged operating environment simplify installation across mixed fleets.

Note on lifecycle: Queclink announced a 2G phase‑out End‑of‑Life for the GV300CAN \(2G phase out in June 2022\). Queclink provides one‑year warranty coverage for affected customers and lifetime technical support; the manufacturer recommends the GV350CEU as an alternative for 2G phase‑out scenarios. Plaspy users should evaluate network compatibility and migration plans as part of long‑term fleet rollouts.

