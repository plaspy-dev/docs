---
slug: /atrack/ax11
id: ax11
sidebar_label: AX11
sidebar_class_name: menu_item_tracker
---
# ATrack - AX11

![AX11](./tracker.jpg)

# AX11 OBDII Vehicle Tracker

The AX11 is a plug-and-play OBDII GPS tracker designed for fast integration with telematics platforms like Plaspy. Built for fleet management, usage-based insurance, car rental operations and teenage driver monitoring, the AX11 combines LTE cellular connectivity, integrated GNSS positioning and rich vehicle-bus telemetry to deliver reliable, Plaspy compatible real-time tracking and reporting.

Engineered for quick installation via the SAE J1962 Type B OBDII port, the AX11 provides robust data capture from passenger cars to heavy-duty trucks. Its carrier-ready LTE hardware, internal GNSS and optional Bluetooth Low Energy support make it an ideal GPS tracker for scalable fleet deployments and vehicle-centric IoT use cases on Plaspy.

## Key Highlights

- Plug-and-play OBDII installation \(SAE J1962 Type B\) for rapid deployment across vehicle fleets.
- LTE connectivity with Cat.1 and Cat.M1 module variants plus TCP/UDP and SMS transport for reliable real-time tracking.
- Integrated GPS/GLONASS 99-channel GNSS engine with −167 dBm tracking sensitivity and typical 2.5 m CEP \(50%\) location accuracy.
- Wide vehicle-bus protocol support \(OBDII, SAE J1939, J1708/J1587, ISO 15765-4 CAN, ISO 14230-4, ISO 9141-2, SAE J1850\) to unlock telemetry such as fuel and engine status where available.
- Internal 64 Mbit flash for local log storage \(~120,000 logs\) and very low deep-sleep current \(around 1.7 mA @12V on some variants\) for minimal draw on vehicle batteries.
- Built-in 3-axis ±16 g accelerometer and 3-axis gyroscope \(±2000 dps\) for driving-behavior events, harsh-braking and collision detection analytics.
- Rugged design meeting MIL-STD-810G/SAE J1455 with operating range −40 to +70°C and flame-retardant ABS+PC enclosure.
- Device management features: internal NanoSIM, ADM/SMS/USB configuration and firmware updates via ADM, FOTA or USB.

## How It Works with Plaspy

When paired with Plaspy, the AX11 streams vehicle location and telematics to the platform using its cellular data link \(TCP/UDP\) or falls back to SMS where needed. Plaspy ingests GNSS fixes, OBD/CAN telemetry and sensor events to provide live maps, alerts and historical reports for fleet managers and insurers.

- Real-time location and telemetry updates over LTE \(Cat.1 / Cat.M1\) to Plaspy for live tracking and geofencing alerts.
- Vehicle-bus data capture \(OBDII / CAN / J1939 / J1708\) enabling fuel monitoring, engine diagnostic parameters and ignition status where available on the vehicle.
- Local log storage \(internal 64 Mbit flash\) with batch upload to Plaspy for reconnect scenarios or intermittent coverage.
- Driving behavior events \(accelerometer/gyroscope\) transmitted to Plaspy for harsh event scoring, driver coaching and safety reports.
- Optional Bluetooth Low Energy support for BLE sensors \(TPMS and other peripherals\) to extend Plaspy telemetry with wireless sensor data.

## Technical Overview

| Connectivity | LTE cellular \(variants: LTE Cat.1 and Cat.M1\); data transport via UDP/IP, TCP/IP and SMS |
| --- | --- |
| Bands / Carrier Readiness | Carrier-certified variants for AT&T, Verizon, Sprint, TELUS and module-certified carriers \(NTT Docomo, KDDI, Telstra\); frequency band variants available for different markets |
| Power & Battery | Vehicle 12V/24V power; deep sleep ~1.7 mA @12V on some variants; internal backup battery 3.7V 90 mAh for brief power-loss scenarios |
| Interfaces | SAE J1962 Type B OBDII connector \(plug-and-play\); mini USB PC/accessory interface; optional adapters and accessory interfaces \(J1939/J1708 adapters, RS232, 1-Wire, OBD extension cables\) |
| GNSS | Integrated GPS/GLONASS, 99-channel engine, −167 dBm tracking sensitivity, typical 2.5 m CEP \(50%\) |
| Bluetooth | Optional Bluetooth Low Energy v4.2 for IoT peripherals and TPMS sensors |
| Remote Management | ADM/SMS/USB configuration and firmware updates via ADM, FOTA or USB cable |
| Form Factor & Durability | OBDII dongle style: 84 × 52 × 25 mm, 80 g; flame-retardant ABS+PC enclosure; rated to MIL-STD-810G/SAE J1455; operating −40 to +70°C \(without battery\) |

## Use Cases

- Fleet management: live vehicle tracking, route replay, scheduling and telemetry for commercial fleets.
- Usage-based insurance and driver scoring: collect OBD/CAN data plus accelerometer/gyroscope events to feed safe-driving models.
- Car rental and shared mobility: plug-and-play installation for mileage, tamper alerts and location reporting without complex wiring.
- Teenage driver monitoring and parental alerts: speed, harsh events and location reporting to help improve driving behavior.
- Heavy-duty truck telemetry: use optional J1939/J1708 adapters and OEM CAN reads to collect engine and fuel parameters for trucks and vocational fleets.

## Why Choose This Tracker with Plaspy

The AX11 is a Plaspy compatible GPS tracker that balances fast deployment with rich telemetry. Its OBDII form factor eliminates complex installation, while industry-grade GNSS and LTE connectivity ensure accurate real-time tracking and reliable data uploads. Built-in sensors and broad vehicle-bus protocol support make it a strong fit for fleet management, telemetry-driven insurance programs and rental operations.

Choose the AX11 with Plaspy to gain scalable, remote-managed tracking that supports Bluetooth sensors, comprehensive OBD/CAN data capture \(fuel and ignition parameters where available\), local logging for intermittent coverage and FOTA-driven lifecycle updates. The combination delivers trusted location awareness, anti-theft recovery capabilities, driving-behavior analytics and the telemetry foundation you need to optimize operations.

