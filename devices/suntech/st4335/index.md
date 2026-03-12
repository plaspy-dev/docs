---
slug: /suntech/st4335
id: st4335
sidebar_label: ST4335
sidebar_class_name: menu_item_tracker
---
# Suntech - ST4335

![ST4335](./tracker.jpg)

The ST4335 is a heavy-duty, multi-hybrid GPS tracker engineered for industrial vehicle and asset tracking and is fully Plaspy compatible for real-time fleet management and telemetry. Built for harsh environments, the ST4335 couples multi-network cellular connectivity with rugged hardware, long backup battery options, and flexible I/O to deliver reliable position, motion and status data into Plaspy for alerts, reports and mapping.

The device is optimized for long-term deployments where low power consumption and secure, continuous telemetry matter. With LTE Cat M1 and NB-IoT primary connectivity plus 2G fallback, GNSS positioning \(GPS + GLONASS + SBAS\), jamming detection and virtual ignition detection, the ST4335 makes an effective building block for Plaspy-enabled anti-theft workflows, trailer/container monitoring, and broad fleet management programs.

## Key Highlights

- Plaspy compatible GPS tracker delivering real-time tracking and telemetry over LTE Cat M1 / NB‑IoT with 2G fallback for broad coverage.
- Rugged lugged enclosure with IP67 protection — built for trailers, containers and heavy machinery in harsh conditions.
- Multiple battery options \(standard 5.2Ah; optional 7.8Ah or 10.05Ah\) plus very low deep-sleep draw for extended autonomy.
- Flexible 15‑pin I/O interface for ignition detection, external sensors and control outputs to support telemetry and anti-theft integrations.
- Advanced GNSS: GPS + GLONASS with SBAS support and typical accuracy around ±3 m CEP for dependable location data.
- Operational features: multiple report modes, conditional reporting, circular and polygonal geofencing, jamming detection and virtual ignition via voltage or motion sensing.
- Optional Bluetooth 4.0 enables BLE sensors and beacons for local monitoring \(temperature, door sensors, proximity\) when required.

## How It Works with Plaspy

The ST4335 sends position and telemetry to Plaspy using standard TCP/UDP data links so your Plaspy instance receives real-time tracking, event alerts and historical logs. Its configurable reporting modes let you balance update frequency and battery life: high-frequency tracking for live fleet operations or conditional reporting for extended unattended asset deployments. Plaspy uses the transmitted GNSS, accelerometer and I/O state data to power live maps, geofence alerts, and analytics.

- Real-time location and telemetry updates delivered to Plaspy via TCP/UDP for mapping and live tracking.
- Virtual ignition identification using voltage or motion sensing reported to Plaspy for engine-on/off events and trip detection.
- Fuel monitoring and other analog/digital sensor data can be integrated through the 15‑pin I/O and forwarded to Plaspy \(requires compatible external sensors\).
- Remote immobilizer/control: configurable I/O can be used to operate immobilizer or relay circuits when integrated into your vehicle control system \(implementation-dependent\).
- Bluetooth sensors/beacons \(optional Bluetooth 4.0\) can feed local environmental or asset state into Plaspy for temperature, door or proximity monitoring.

## Technical Overview

| Connectivity | LTE Cat M1 \(LTE‑M\) and NB‑IoT \(NB2\) with EGPRS \(2G\) fallback; TCP/UDP data transport |
| --- | --- |
| Bands | Broad range of LTE Cat M1 and NB2 bands plus EGPRS bands for global compatibility \(device variants may differ by market\) |
| Power & Battery | DC input 8–33 V with main power inversion protection; backup battery options: 5.2 Ah \(standard\), optional 7.8 Ah or 10.05 Ah; typical currents: active 70–80 mA @12 V; sleep &lt;5 mA; deep sleep &lt;3 mA |
| Interfaces | 15‑pin connector providing configurable digital/analog I/O; virtual ignition detection via voltage or motion; two LED indicators \(network, GPS\); built-in 3‑axis accelerometer |
| GNSS | GPS + GLONASS with SBAS support \(WAAS, EGNOS, MSAS\); typical accuracy ~±3 m CEP; TTFF Cold &lt;35 s, Warm &lt;30 s, Hot &lt;1 s; sensitivity: tracking -167 dBm, acquisition -149 dBm |
| Bluetooth | Optional Bluetooth 4.0 \(BLE\) for external sensors and beacons |
| Remote Management & Protocols | Data transport via TCP/UDP; PTCRB certification; device supports configurable reporting modes and conditional reporting |
| Form Factor & Environment | Dimensions 97.4 × 130 × 37.5 mm; rugged lugged enclosure; IP67 dust/water protection; operating temp: -30°C to +80°C \(vehicle power\), -20°C to +60°C \(backup battery\) |

## Use Cases

- Fleet management: real-time tracking, route logging and ignition-based trip detection for mixed fleets operating across cellular networks.
- Trailer and container tracking: IP67 ruggedness and long battery options enable long-term deployments on trailers, chassis and intermodal containers.
- Anti-theft and recovery: jamming detection, motion-based alerts and remote control opportunities via configurable I/O help secure high-value assets.
- Industrial telemetry: send sensor data \(temperature, door, fuel level\) through the 15‑pin interface for integrated Plaspy dashboards and reports.
- Long-term unattended assets: low deep-sleep consumption and conditional reporting make the ST4335 suited for remote equipment and seasonal deployments.

## Why Choose This Tracker with Plaspy

Pairing the ST4335 with Plaspy delivers a practical mix of rugged hardware and flexible integration that professional operators need. The device’s multi-network cellular stack and 2G fallback ensure connectivity in varied geographies, while GNSS accuracy and fast TTFF provide dependable real-time tracking. Its low-power modes and large optional backup batteries extend deployment life for remote assets, and the robust 15‑pin I/O gives you the flexibility to capture ignition events, sensor telemetry and control circuits used in anti-theft or immobilizer workflows.

For fleet managers and telemetry teams, Plaspy-compatible integration means you get out-of-the-box support for live maps, geofencing, alerts and historical reporting without custom middleware. The ST4335’s combination of rugged physical design, configurable reporting and optional Bluetooth sensors provides a scalable platform for vehicle tracking, fuel monitoring workflows \(when paired with compatible sensors\), anti-theft protection and broader industrial telemetry needs.

