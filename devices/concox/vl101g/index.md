---
slug: /concox/vl101g
id: vl101g
sidebar_label: VL101G
sidebar_class_name: menu_item_tracker
---
# Concox - VL101G

![VL101G](./tracker.png)

The VL101G vehicle terminal by VL \(model VL101G\) is a Plaspy compatible GPS tracker engineered for professional fleet management and vehicle telematics. Designed for rooftop and exposed installations, this 4G GNSS tracker combines high-precision positioning, robust network connectivity, and vehicle-oriented I/O to deliver reliable real-time tracking, tamper resilience, and actionable vehicle data for fleets, rental operations, and usage-based insurance programs.

Integrating dual-frequency GNSS \(L1 + L5\) with GPS, BDS, GLONASS and Galileo support plus an inertial navigation system \(INS\), the VL101G keeps location accuracy strong even in marginal-signal environments. With LTE Cat 1 communication and GSM \(2G\) fallback, onboard storage and vehicle inputs/outputs, the VL101G provides the telemetry, ignition status and immobilizer-ready control channels that Plaspy-based systems use to deliver advanced monitoring, anti-theft protection and fleet optimization.

## Key Highlights

- Plaspy compatible GPS tracker optimized for real-time tracking and fleet management workflows.
- Dual-frequency GNSS \(L1 + L5\) with GPS, BDS, GLONASS and Galileo for high positioning accuracy \(＜1.5 m CEP\).
- LTE Cat 1 with GSM \(2G\) fallback and Micro-SIM slot for broad cellular coverage and dependable uplink.
- Vehicle-focused inputs/outputs and TTL/RS232 compatibility to support ignition detection, telemetry and remote engine cut-off \(immobilizer\).
- Rugged IP66 enclosure, wide operating temperature \(−20°C to +70°C\) and compact form factor for rooftop and exposed vehicle use.
- Onboard storage \(128+128 Mb\) and a 450 mAh industrial-grade Li-Polymer backup battery for offline data logging and continued operation during power loss.
- Built-in accelerometer and gyroscope for driving behavior analytics \(harsh acceleration, braking, cornering, sudden lane change\).

## How It Works with Plaspy

When integrated with Plaspy, the VL101G streams GNSS position fixes, vehicle telemetry and input/output events to the platform for real-time visibility, alerts and historical reporting. Plaspy ingests the device's position and sensor telemetry over the cellular uplink and translates ignition, movement and digital I/O events into operational insights, geo-fence triggers and security workflows within your fleet management dashboard.

- Real-time location and telemetry updates delivered to Plaspy via LTE Cat 1 \(with GSM fallback\).
- Ignition detection and vehicle movement events mapped to Plaspy dashboards and alerts for start/stop, unauthorized movement or tampering.
- Driving behavior analytics \(harsh acceleration, harsh braking, harsh cornering, sudden lane change\) reported as telematics events for coaching and risk scoring.
- Remote immobilizer capability \(engine cut-off\) implemented via relay control and digital outputs for anti-theft and asset recovery workflows.
- Offline data buffering \(onboard storage\) and backup battery operation ensure continuity of logs and position history when connectivity is intermittent.

## Technical Overview

| Connectivity | LTE Cat 1 with GSM \(2G\) fallback; Micro-SIM slot |
| --- | --- |
| Bands | Manufacturer-specified LTE/GSM bands \(see vendor datasheet\) |
| Power & Battery | Wide input 3–36 V DC; 450 mAh industrial Li-Polymer backup battery |
| Interfaces | Digital inputs/outputs, TTL interfaces, RS232/TTL compatibility; relay control for remote engine cut-off \(immobilizer\) |
| GNSS | Dual-frequency GNSS L1 + L5; supports GPS, BDS, GLONASS, Galileo; accuracy &lt;1.5 m CEP; TTFF hot ≤1 s, cold ≤24 s |
| Bluetooth | Not specified \(use Plaspy integration to combine VL101G data with external Bluetooth sensors if needed\) |
| Remote Management | Status LEDs for GNSS/Cellular/Power, industry-standard communication protocols for cloud integration; onboard storage for logged data |
| Form Factor | 70.0 × 80.0 × 25.0 mm; 113 g; IP66 rated; operating temperature −20°C to +70°C |

## Use Cases

- Fleet management: continuous real-time tracking, routing, driver scoring and maintenance planning using telemetry and driving behavior analytics.
- Vehicle rental & leasing: usage monitoring, geo-fence enforcement and tamper/immobilizer options to protect assets and enforce contracts.
- Usage-based insurance \(UBI\): capture high-fidelity driving events and accurate positions to support risk-based premiums and claims investigations.
- Anti-theft & recovery: ignition detection plus remote engine cut-off \(immobilizer\) and movement alerts integrated with Plaspy incident workflows.
- Telematics & diagnostics: collect telemetry channels and external sensor data for fuel monitoring, battery health checks and operational reporting.

## Why Choose This Tracker with Plaspy

The VL101G is a purpose-built GPS tracker for fleets that need precise positioning, resilient connectivity and vehicle-level control. As a Plaspy compatible device, it feeds high-frequency GNSS fixes, telemetry and event data directly into Plaspy for real-time tracking, fleet management and anti-theft operations. Its dual-frequency GNSS and INS minimize position drift in difficult environments, while onboard storage and a backup battery preserve data continuity during signal or power interruptions.

For operators focused on total cost of ownership and operational safety, the VL101G’s driving behavior analytics, ignition detection and relay-based immobilizer provide immediate value: reduce fuel consumption and wear through driver coaching, tighten security with remote immobilization, and consolidate vehicle telemetry for smarter maintenance decisions. Plaspy further enriches operations by combining VL101G vehicle feeds with additional data sources — for example, external fuel sensors or Bluetooth sensors managed by the platform — to deliver comprehensive telemetry, reporting and alerting without requiring a single-vendor hardware stack.

