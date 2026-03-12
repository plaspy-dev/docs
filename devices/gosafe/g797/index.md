---
slug: /gosafe/g797
id: g797
sidebar_label: G797
sidebar_class_name: menu_item_tracker
---
# Gosafe - G797

![G797](./tracker.png)

The G797 OBD2 GPS Tracker is a compact, plug-and-play telematics device designed for fleet management, insurance telematics and rental/leasing programs. Built to connect directly to a vehicle’s J1962 OBDII port, the G797 delivers precise GNSS positioning and rich OBD/CAN diagnostics to Plaspy for reliable real-time tracking, event reconstruction and usage-based reporting.

The unit combines a Ublox 6 GNSS engine with self‑calibrating 3D accelerometry \(and optional 6D accelerometer/gyroscope\) to support FNOL \(First Notice Of Loss\) alerts, driver behavior monitoring and multi-source odometer accumulation. With GPRS/EDGE reporting and optional UMTS/LTE variants, the G797 is a practical Plaspy compatible GPS tracker for large fleets, insurance providers and rental operators that require accurate telemetry and streamlined provisioning.

## Key Highlights

- Plaspy compatible GPS tracker that delivers reliable real-time tracking and OBD telemetry from the vehicle’s J1962 OBDII port.
- Accurate GNSS: Ublox 6 with SBAS \(WAAS/EGNOS/MSAS\) for ~2.0 m CEP positional accuracy and −162 dBm sensitivity.
- Event-ready sensors: built-in self‑calibrating 3D accelerometer with optional 6D accelerometer/gyroscope for crash reconstruction and FNOL workflows.
- Full OBD & J1939 protocol support to extract VIN, odometer sources and vehicle diagnostic values useful for telemetry and fuel monitoring where PIDs are available.
- Flexible connectivity: GPRS/EDGE with TCP/UDP/SMS reporting plus optional UMTS/LTE models for regions that require newer cellular bands.
- Fleet rollouts simplified: plug-and-play OBDII installation, extension cable accessories and remote configuration/firmware updates via GICUS.
- Rugged design: wide operating temperature range and MIL-STD/SAE J1455 shock & vibration tolerance suitable for fleet vehicles.

## How It Works with Plaspy

Integrating the G797 into Plaspy enables consistent streaming of location, diagnostic and event data so fleet managers and insurers get actionable insight in real time. The device reports GNSS locations, OBD-derived telemetry and accelerometer events using standard TCP/UDP/SMS channels; Plaspy ingests these feeds to power live tracking, telematics dashboards and automated alerts.

- Real-time location and telemetry updates sent to Plaspy for live fleet visibility and historical replay.
- VIN extraction and OBD diagnostic PIDs delivered to Plaspy to support vehicle identification, maintenance workflows and usage-based insurance analytics.
- Multi-source odometer accumulation via OBD and GNSS to improve mileage accuracy for leasing and billing.
- Crash and event data from the 3D accelerometer \(and optional 6D IMU\) for FNOL alerts and incident reconstruction in Plaspy.
- Remote configuration and firmware updates using GICUS and USB provisioning to minimize vehicle downtime during fleet rollouts.
- Optional Bluetooth support for integrating BLE sensors or beacons where those accessories are available and enabled.

## Technical Overview

| Connectivity | GPRS/EDGE with TCP/UDP/SMS reporting; optional UMTS and LTE variants available |
| --- | --- |
| Bands | GSM/GPRS 850/900/1800/1900; optional UMTS and LTE bands \(examples: B1/B2/B3/B4/B5/B7/B13/B17\) |
| Power & Battery | 8–32 V DC operation \(12V & 24V systems supported\); Li‑Po 250 mAh backup battery |
| Interfaces | Direct connection to J1962 \(OBDII\) port; USB for configuration/firmware; insertable/internal or embedded SIM options; optional Bluetooth |
| GNSS | Ublox 6 with SBAS \(WAAS/EGNOS/MSAS\), GPS L1 C/A, ~2.0 m CEP accuracy, −162 dBm sensitivity |
| On-board | ARM Cortex‑M3 CPU; 4–64 Mbit flash |
| Supported OBD/Diagnostic Protocols | J1939, J1850 PWM/VPW, ISO 9141‑2, ISO 14230‑4 \(KWP\), ISO 15765‑4 \(CAN\), KW1281, ALDL, ISO11898 |
| Environmental | Operating: −40 to +80 °C \(device only\); −10 to +50 °C with backup battery; 95% RH non‑condensing; shock & vibration per MIL‑STD and SAE J1455 |
| Form Factor | Compact OBDII dongle — 52 × 57 × 28 mm, 80 g |

## Use Cases

- Insurance telematics and usage-based insurance: collect VIN, driving behavior, GPS traces and event data to underwrite and automate FNOL.
- Large fleet management: real-time tracking, driver behavior monitoring and multi-source odometer reporting for maintenance and payroll reconciliation.
- Leasing and rental companies: tamper-resistant OBDII installation, mileage tracking and remote diagnostic visibility for asset control.
- Crash reconstruction and safety analytics: accelerometer and optional gyroscope data fed to Plaspy for incident review and automated alerts.
- Discreet installations: use extension/T-cables or Deutsch OBD-II cables for out-of-sight mounting during rental or covert fleet deployments.

## Why Choose This Tracker with Plaspy

The G797 is a practical Plaspy compatible GPS tracker when you need both accurate location and in-vehicle diagnostics from a single, easy-to-install unit. Its direct OBDII integration delivers VIN, vehicle telemetry and odometer sources that complement GNSS position data, enabling more reliable fleet management and insurance telematics. Remote configuration via GICUS and USB reduces field visits, while optional cellular variants and Bluetooth support give deployment flexibility across regions and accessory ecosystems.

Note on outputs and immobilizer functions: the G797 does not include dedicated outputs for remote immobilizer or ignition cut by default. If your workflow requires active immobilizer or ignition control, consider combining the G797’s telemetry and crash/event data in Plaspy with an external actuator or controller that provides those outputs. For fuel monitoring, the G797 supports extraction of OBD diagnostic values and PIDs where the vehicle exposes fuel-related parameters; Plaspy can ingest those values for fuel monitoring and reporting when available.

