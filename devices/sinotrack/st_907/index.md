---
slug: /sinotrack/st_907
id: st_907
sidebar_label: ST-907
sidebar_class_name: menu_item_tracker
---
# SinoTrack - ST-907

![ST-907](./tracker.jpg)

# SinoTrack ST-907

The SinoTrack ST-907 is a compact, wired GPS tracker designed for covert vehicle installation and reliable Plaspy compatible monitoring. Its mini-sized form factor, built-in high-sensitivity GPS and GSM antennas, and quad-band GSM support make the ST-907 a practical choice for real-time tracking, anti-theft response and fleet management across a wide range of vehicles.

The ST-907 reports position and alarms using SMS and GPRS and supports configurable server IP/port settings, allowing it to be connected to third-party platforms such as Plaspy. With relay-based remote control to cut fuel or power circuits, overspeed and geofence alarms, and SMS diagnostic controls, the ST-907 delivers essential telemetry and immobilizer capability for cars, taxis, motorcycles and logistics vehicles.

## Key Highlights

- Plaspy compatible via configurable GPRS server IP/port — report real-time tracking and alarms to Plaspy using the device's SMS/GPRS commands.
- Quad-band GSM \(850/900/1800/1900 MHz\) for wide regional coverage and flexible SIM selection \(SIM not included\).
- Built-in high-sensitivity GPS and GSM antennas for reliable position fixes in typical vehicle installations.
- Relay-based remote control to cut fuel or power circuits — practical anti-theft/immobilizer function for vehicles.
- Real-time location updates by SMS and GPRS, overspeed alarms and configurable geofencing for fleet management and safety.
- Authorized-number management and SMS-based diagnostics for quick, on-the-ground control and troubleshooting.
- Mini form factor for easy concealment during installation in cars, motorcycles and light commercial vehicles.

## How It Works with Plaspy

The ST-907 sends location and alarm data over GPRS or SMS. Because the device allows the server IP and port to be set via SMS, it can be configured to report directly to Plaspy's server endpoint. Installers and administrators can initialize the device by setting APN and server parameters, then point the device to Plaspy to enable real-time tracking, alerts, and reporting within your Plaspy account.

- Real-time location and telemetry updates by GPRS \(position, speed, overspeed alarms\) and SMS as fallback.
- Alarm and status events: overspeed alarm and configurable geofence alerts are supported and can be forwarded to Plaspy as alarm events.
- Remote immobilizer: relay-based fuel/power cut can be used as an immobilizer feature controlled via SMS or platform command \(subject to Plaspy support for remote relay commands\).
- Authorized-number management and SMS control for local, secure admin access when network access is unavailable.
- Configuration via SMS: set APN, server IP and port using the device's SMS initialization commands to connect the tracker to Plaspy’s ingestion endpoint.

## Configuration Notes

To connect the ST-907 to a third-party platform, use the device's SMS configuration commands. The device documentation provides recommended initialization steps \(replace the example server IP and port with Plaspy’s server values\):

- SMS1: 7100000 — device initialization command.
- SMS2: 8040000 &lt;server\_IP&gt; &lt;port&gt; — set the GPRS server IP and port \(replace with Plaspy values\).
- SMS3: 8030000 &lt;APN&gt; &lt;APNuser&gt; &lt;APNpassword&gt; — set carrier APN only if required by the SIM.

Note: the ST-907 does not include a SIM card—choose a local SIM with the desired data plan and roaming options. The device can also be used with the manufacturer’s free SinoTrack PRO platform \(default server IP examples provided by SinoTrack\), but for Plaspy compatibility set the server IP/port to Plaspy’s values and confirm any authentication requirements with Plaspy documentation.

## Technical Overview

| Connectivity | GPRS and SMS reporting over quad-band GSM \(850/900/1800/1900 MHz\) |
| --- | --- |
| Bands | Quad-band GSM 850 / 900 / 1800 / 1900 MHz |
| Power & Battery | Wired vehicle installation. Internal backup battery not specified in product description. |
| Interfaces | Relay output for remote fuel/power cut; SMS-based diagnostic and control commands. Specific digital I/O or ignition inputs not detailed in description. |
| GNSS | Built-in high-sensitivity GPS antenna for reliable fixes \(accuracy not specified in supplied description\) |
| Bluetooth | No Bluetooth sensors or BLE interfaces are listed in the product description \(verify if BLE required\). |
| Remote Management | Configure APN and server IP/port via SMS. Supports IMEI query/change via SMS commands; compatible with SinoTrack PRO web/app \(free platform\). |
| Form Factor | Mini-sized wired tracker for concealed installation in cars, taxis, motorcycles and light commercial vehicles. |

## Use Cases

- Fleet management for small fleets — real-time tracking and geofence/overspeed alerts help improve routing and safety.
- Anti-theft and immobilization — relay-based fuel/power cut allows remote immobilizer actions to deter theft.
- Taxi and ride-hailing vehicles — discreet installation combined with real-time tracking and authorized-number control.
- Motorcycle and private car tracking — mini form factor for hidden mounting and reliable SMS/GPRS updates.
- Logistics and delivery vehicles — track assets in real time and receive geofence and overspeed notifications.

## Why Choose This Tracker with Plaspy

The SinoTrack ST-907 is a practical Plaspy compatible option when you need a compact, wired GPS tracker with flexible reporting and basic immobilizer capability. Its quad-band GSM and SMS/GPRS reporting give you the choice of using the free SinoTrack PRO platform or pointing the device to Plaspy by updating the server IP/port and APN. For operators focused on fleet management, anti-theft protection and straightforward telemetry, the ST-907 provides a reliable building block that integrates with Plaspy’s real-time tracking, alerts and reporting workflows.

Before deployment, confirm Plaspy’s required server IP/port and any authentication methods so you can apply the device’s SMS initialization commands. Also verify local IMEI registration requirements where applicable and select a SIM plan that matches your data and roaming needs. If you require Bluetooth sensors or extended telemetry \(fuel-level sensors, CAN-bus data, etc.\), review alternative models or check with the provider for additional accessories and integration notes.

Support & Warranty: SinoTrack supplies wiring diagrams, installation images, and a user manual for activation and setup. The manufacturer offers 24-hour support, shipping options including expedited couriers, and a two-year warranty for goods with defect reporting procedures as documented by SinoTrack.

