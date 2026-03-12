---
slug: /carscop/cc_338
id: cc_338
sidebar_label: CC-338
sidebar_class_name: menu_item_tracker
---
# Carscop - CC-338

![CC-338](./tracker.JPG)

The CC-338 4G T-Box is a Plaspy compatible vehicle telematics GPS tracker designed for car rental, car sharing, and fleet management. Built as a compact T-Box with integrated GSM/GPS antennas and OBD II CANBUS connectivity, the CC-338 converts ordinary vehicles into mobile-phone controllable cars for unattended rental and self-service sharing. Its multi-network cellular support \(4G/3G/2G\), A-GPS with LBS fallback, and onboard logging make it a reliable choice for real-time tracking and secure remote control.

The CC-338 couples deep vehicle telemetry with multiple control channels: internet \(app/API\), Bluetooth LE for offline control, and wired outputs for central locking, siren, lights, horn and engine cut. Purpose-built for integrators and fleet operators, the unit supports telemetry, ignition and door alarms, anti-theft workflows, and remote immobilizer commands while exposing an open API and TCP/IP connectivity for Plaspy integration and private-server deployments.

## Key Highlights

- Plaspy compatible GPS tracker for real-time tracking and fleet management with open API and TCP/IP connectivity for seamless integration.
- Multi-band 4G/3G/2G global cellular support ensures broad network coverage for telemetry and remote control.
- OBD II CANBUS interface provides deep vehicle telemetry and control capability, enabling diagnostics and fuel-related data where vehicle CAN supports it.
- Multiple control methods: internet/app/API, Bluetooth LE for local offline control, and wired outputs for central locking, lights, siren and engine-cut immobilizer.
- Built-in A-GPS and LBS fallback with onboard logging and last-known-position retention for no-GPS or no-GSM conditions.
- Safety sensors including shock sensor, G-sensor for driving behavior, door and ACC alarms, plus a rechargeable backup Li-battery for power-down alerts.
- Wide operating voltage \(9–40 V\) supports both 12V and 24V vehicles including gasoline, diesel and electric fleets.

## How It Works with Plaspy

When paired with Plaspy, the CC-338 acts as a data and command gateway between the vehicle and your management platform. It streams location and vehicle telemetry to Plaspy for live monitoring, triggers alarms, and accepts remote commands for immobilization or access control. Integration uses the device's TCP/IP channel or the open API so fleet managers can implement workflows for car sharing, anti-theft, and maintenance scheduling.

- Real-time location and telemetry updates streamed to Plaspy for monitoring and reporting.
- Ignition/ACC state, door and alarm events reported to Plaspy for safety and usage tracking.
- CANBUS vehicle data \(speed, engine status, diagnostic and fuel-related parameters where available through vehicle CAN\) forwarded as telemetry.
- Remote immobilizer / engine-cut control via internet command or SMS for anti-theft and rental enforcement.
- Bluetooth LE local control and Bluetooth sensors for offline access management and proximity-based workflows.
- Onboard logging and last-known-position retention when GSM or GPS are unavailable; logs forward to Plaspy once connectivity returns.

## Technical Overview

| Connectivity | 4G LTE / 3G WCDMA / 2G GSM \(multi-network cellular\) |
| --- | --- |
| Bands | Multi-band 4G/3G/2G support for global operation \(manufacturer-provided global variants\) |
| Power & Battery | Operating voltage 9–40 V \(12V & 24V vehicles\); rechargeable backup Li-battery for power-down alarms and backup logging |
| Interfaces | OBD II CANBUS interface for reading vehicle data and issuing control commands; CANBUS and wired dual-control outputs for central locking, siren, lights, horn and engine cut; ACC/ignition and door alarm inputs |
| GNSS | GPS module with A-GPS for fast acquisition; LBS \(cell-tower\) locating when GPS is unavailable; configurable GPS upload intervals and last-known-position memory |
| Bluetooth | Bluetooth Low Energy \(BLE\) for local offline control and BLE sensor/beacon support |
| Remote Management | OTA firmware upgrade \(GPRS\), TCP/IP connectivity for private servers, open API and app/API control for integration |
| Form Factor | Vehicle telematics T-Box with built-in GSM and GPS antennas; compact, hidden-install profile; package includes main unit, wiring harness and user manual |

## Use Cases

- Unattended car rental and self-service car sharing: enable remote door control, user authentication via app/Bluetooth, and automatic billing tied to ignition/usage data.
- Fleet management and telemetry: track vehicle location, driving behavior \(G-sensor\), OBD CANBUS diagnostics, and maintenance triggers through Plaspy dashboards.
- Anti-theft and immobilization: remote engine-cut via internet or SMS plus alarm notifications for doors, shock sensor triggers and power-down events.
- Fuel monitoring and operational analytics: forward CANBUS fuel-related parameters to Plaspy \(when exposed on vehicle CAN\) to support fuel monitoring and trip-level reporting.
- Local/offline control and proximity workflows: BLE-based local unlocking or access for short-term rentals and keyless entry scenarios without relying solely on cellular coverage.

## Why Choose This Tracker with Plaspy

The CC-338 is a practical choice for operators who need a Plaspy compatible GPS tracker that balances rich vehicle telemetry with flexible control channels. Its integrated OBD II CANBUS access gives you granular vehicle data for diagnostics, fuel monitoring where available, and usage-based workflows. Multiple control paths—app/API, BLE, wired outputs and SMS—mean you can design robust anti-theft and car-sharing experiences that work in real-time and offline modes.

For fleet managers and integrators, the CC-338’s wide voltage range, onboard logging, OTA updates, and open API reduce deployment friction and lower long-term maintenance overhead. Whether you run a rental fleet, a sharing platform, or need anti-theft immobilization, pairing the CC-338 with Plaspy delivers scalable real-time tracking, actionable telemetry, and secure remote control to keep vehicles under efficient operational oversight.

Manufacturer demo platforms are available \(cloud control demo at https://www.999gps.com — account: test / password: 123456; car rent demo at http://rent.999gps.com — account: carsharing / password: 123456\) for integrators evaluating Plaspy compatible GPS tracker integration and API workflows.

