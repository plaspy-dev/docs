---
slug: /cantrack/tk100n
id: tk100n
sidebar_label: TK100N
sidebar_class_name: menu_item_tracker
---
# CanTrack - TK100N

![TK100N](./tracker.png)

The TK100N by a proven OEM is a hard-wired, multi-functional 2G vehicle GPS tracker engineered for professional deployments. Plaspy compatible out of the box, it supports GT06N protocol and provides reliable real-time tracking, ACC detection, SOS panic, and remote relay control — making it a practical choice for fleet management, anti-theft protection, and telemetry-driven operations.

Designed for cars, motorcycles and e-bikes, the TK100N installs directly into the vehicle harness and operates across a wide voltage range \(9–90V DC\). With MTK high-sensitivity GNSS \(-159 dBm\) and typical position accuracy around 10 meters, it integrates with Plaspy to deliver live location, status alerts, and remote control capabilities that fleet operators and security teams depend on.

## Key Highlights

- Plaspy compatible via GT06N protocol for quick platform integration and standardized telemetry ingestion.
- Real-time tracking over GPRS/TCP-IP with SMS fallback for resilient location reporting.
- Robust anti-theft tools: ACC detection, SOS panic button, vibration and power-off alarms, plus remote relay immobilizer control.
- High-sensitivity MTK GNSS chipset \(‑159 dBm\) with typical GPS accuracy around 10 meters for dependable positioning.
- Wide operating voltage \(9–90V DC\) and low current draw \(5–50 mA\) suitable for varied vehicle electrical systems.
- Compact, lightweight form factor \(approx. 79 × 34 × 18 mm; ~50 g\) for discreet installation on cars, motorcycles and e-bikes.
- Comprehensive SMS command set for remote configuration, status checks, and emergency operations when data connectivity is limited.

## How It Works with Plaspy

When connected to Plaspy, the TK100N streams location and event data via GPRS using the GT06N-compatible message format. Plaspy parses incoming TCP/IP packets or accepts SMS/GPRS fallbacks to display live position, vehicle telemetry and alarm states in the dashboard. Commands issued from Plaspy \(or through a configured server\) can trigger relay actions and request status updates, enabling centralized fleet control and anti-theft workflows.

- Real-time location and telemetry updates via GPRS/TCP-IP to Plaspy’s server using GT06N protocol.
- ACC detection \(ignition status\) reported to Plaspy for trip segmentation, idling reports and driver behavior insights.
- SOS panic, vibration and power-off alarms forwarded to Plaspy for immediate alerting and incident tracking.
- Remote immobilizer \(relay control\) — Plaspy can issue commands to cut or resume fuel/power where permitted by local law and installation.
- SMS command fallback and voice monitoring available when data is constrained, providing redundant control and verification paths.

## Technical Overview

| Connectivity | 2G \(GSM/GPRS\) for GPRS/TCP-IP and SMS control; TCP/IP reporting to Plaspy servers. |
| --- | --- |
| Bands | Specific cellular bands vary by manufacturing variant; consult the device datasheet or supplier for regional band support. |
| Power & Battery | Operating voltage 9–90V DC; low power consumption 5–50 mA \(no long-term internal backup battery specified in supplied description\). |
| Interfaces | ACC ignition detection, SOS panic input, relay control for immobilizer \(remote cut-off\), vibration and power-off alarm reporting, voice listen capability. |
| GNSS | MTK high-sensitivity chipset, sensitivity down to -159 dBm, typical accuracy around 10 meters. |
| Bluetooth | Not specified for Bluetooth sensors; no built-in BLE noted in the description. |
| Remote Management | GT06N protocol compatibility; configuration and control via SMS commands and TCP/IP \(set server IP/APN, reporting intervals, relay control, alarm settings, factory reset\). |
| Environmental | Operation: -20°C to +55°C; Storage: -40°C to +85°C; Humidity tolerance 15%–95% RH. |
| Form Factor | Compact hard-wired module ~79 × 34 × 18 mm, weight ~50 g — intended for discreet vehicle installation. |

## Use Cases

- Fleet management — live location, trip start/stop via ACC detection, and scheduled reporting for operational visibility.
- Anti-theft recovery — SOS alarms, vibration and power-off alerts, and remote relay-based immobilization to assist recovery efforts.
- Driver behavior monitoring — ignition/ACC events and movement history to support safety and compliance programs.
- Asset protection for motorcycles & e-bikes — small form factor and low current draw enable continuous protection on two-wheel vehicles.
- Telemetry and inventory control — combine TK100N position data with Plaspy analytics for route optimization and loss prevention.

## Why Choose This Tracker with Plaspy

The TK100N is a practical, Plaspy compatible tracker for organizations that need reliable real-time tracking, straightforward platform integration and hardened anti-theft controls. Its GT06N protocol compatibility simplifies onboarding to Plaspy, while GPRS/TCP-IP plus SMS fallback ensures resilient telemetry delivery. For fleet operators, the combination of ACC detection, configurable reporting intervals and remote relay control delivers actionable telemetry and direct intervention capabilities. The device’s compact form, wide voltage tolerance and robust operating temperature range make it suitable for varied vehicle types and climates, giving you a dependable component for scalable fleet management, telemetry-driven workflows, and anti-theft strategies.

