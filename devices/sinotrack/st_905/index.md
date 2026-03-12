---
slug: /sinotrack/st_905
id: st_905
sidebar_label: ST-905
sidebar_class_name: menu_item_tracker
---
# SinoTrack - ST-905

![ST-905](./tracker.jpg)

The SinoTrack ST-905 is a compact, waterproof magnetic GPS tracker engineered for covert mounting on vehicles, bicycles and other mobile assets. Plaspy compatible when configured to report to a custom server IP and APN, the ST-905 combines UBLOX GNSS accuracy with GSM/GPRS connectivity to deliver reliable real-time tracking, long standby operation and a discreet form factor for anti-theft and asset protection applications.

The slim, magnet-backed IP-rated housing and large 5000 mAh rechargeable battery make the ST-905 a low-maintenance GPS tracker suitable for fleet management, outdoor activity tracking and valuable-item security. Configure the device via SMS to point its GPRS reporting to the Plaspy server and use Plaspy’s dashboard and alerts for telemetry, geofencing and operational reporting.

## Key Highlights

- Plaspy compatible — point the ST-905 to your Plaspy server IP/APN via SMS for real-time tracking and platform integration.
- Long battery life — 3.7V 5000 mAh Li‑ion battery with 40–60 days standby \(depending on reporting interval\) for low-maintenance deployments.
- Waterproof magnetic design — slim, strong magnet and IP-rated enclosure for secure, covert mounting on metal surfaces.
- Accurate GPS positioning — UBLOX UBX-G7020 GNSS module with approximately 5 m accuracy and fast TTFF \(hot 1 s\).
- Global 2G GSM connectivity — supports 850/900/1800/1900 MHz bands for broad GSM/GPRS coverage where 2G networks remain available.
- Quick configuration — SMS command set to configure APN, platform IP and reporting behavior without special tools.
- Robust temperature range and humidity tolerance — designed for outdoor and vehicle environments.

## How It Works with Plaspy

The ST-905 sends GPS position and status reports over GSM/GPRS to a configured server address. For Plaspy integration, set the tracker’s IP and APN using the manufacturer’s SMS configuration commands so the device forwards location packets to your Plaspy instance. Plaspy then processes those packets for real-time tracking, history, alerts and fleet reporting.

- Real-time tracking: GPS coordinates are transmitted over GPRS to the configured server for live location display in Plaspy.
- Platform routing: Configure IP/APN via SMS to point the tracker to Plaspy’s ingestion endpoint \(TCP/UDP\) or your Plaspy-hosted server.
- Reporting control: Adjust reporting frequency and low-power behavior through SMS commands to balance update granularity and battery life.
- Battery and status monitoring: Use Plaspy to monitor battery levels and device online/offline status reported by the tracker.
- Extensible fleet features: Once the ST-905 is connected to Plaspy, leverage platform tools for fleet management, geo-fencing, and anti-theft alerts; additional telemetry \(ignition, fuel, immobilizer, Bluetooth sensors\) may be available in Plaspy when used with trackers or adapters that expose those signals.

## Technical Overview

| Connectivity | GSM/GPRS \(2G\) |
| --- | --- |
| Bands | 850 / 900 / 1800 / 1900 MHz |
| Power & Battery | Rechargeable 3.7V 5000 mAh Li‑ion; includes 110–220V to 5V/1A wall charger |
| Interfaces | SMS configuration for IP/APN and parameters \(no external I/O specified\) |
| GNSS | UBLOX UBX-G7020; ~5 m accuracy; sensitivity -159 dBm; TTFF Cold 45 s / Warm 35 s / Hot 1 s |
| Bluetooth | Not specified / No built-in Bluetooth reported |
| Remote Management | Configurable via SMS commands \(platform IP/APN, reporting interval\); works with SinoTrack platform by default |
| Form Factor | Compact magnetic enclosure; Dimensions 10 × 8 × 2.5 cm; Weight 45 g; waterproof IP-rated housing |
| Environmental | Operating -20°C to +55°C; Storage -40°C to +85°C; Humidity 5%–95% non-condensing |

## Use Cases

- Fleet management — discreet tracking for cars, service vehicles and light equipment where a low-profile magnetic mount is preferred.
- Anti-theft and recovery — covert installation on vehicles and bicycles to help locate stolen assets and trigger platform alerts.
- Asset protection — long-standby monitoring of trailers, containers and portable machinery between deployments.
- Outdoor activity tracking — attach to bikes or gear for location logging during trips, with waterproof protection in adverse weather.
- Low-maintenance installations — situations where infrequent charging and simple SMS configuration are priorities.

## Why Choose This Tracker with Plaspy

When paired with Plaspy, the SinoTrack ST-905 offers a straightforward, cost-effective path to real-time GPS tracking and fleet visibility. Its long-life battery and waterproof magnetic housing cut installation time and reduce maintenance, while the UBLOX GNSS module delivers dependable positioning for anti-theft and operational use. The device’s SMS-configurable IP/APN model lets fleet managers and integrators point reporting to Plaspy or a self-hosted server without special software, enabling rapid onboarding and centralized telemetry.

Practical advantages include reduced downtime \(long standby\), covert placement \(strong magnet and slim profile\), and flexibility to choose local SIM/APN providers. Note the ST-905 is a 2G GSM tracker and is sold without a SIM card — confirm 2G network availability and any regional IMEI registration requirements \(some countries require IMEI registration; the vendor provides guidance and SMS commands where applicable\). For teams needing additional telemetry such as ignition event capture, fuel monitoring or Bluetooth sensor integration, Plaspy can often surface those metrics when paired with compatible tracking devices or auxiliary adapters.

