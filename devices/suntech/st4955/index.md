---
slug: /suntech/st4955
id: st4955
sidebar_label: ST4955
sidebar_class_name: menu_item_tracker
---
# Suntech - ST4955

![ST4955](./tracker.jpg)

The ST4955 series is a rugged, solar-powered GPS tracker built for long-term outdoor monitoring and Plaspy compatible deployments. Designed to operate on LTE Cat M1 and NB‑IoT networks with EGPRS \(2G\) fallback, the ST4955 delivers dependable real-time tracking and low-power telemetry for vehicles, non-powered assets and high-value equipment in harsh environments.

With multi-month autonomous operation, a high-sensitivity 56-channel u‑blox GNSS receiver, optional Bluetooth sensors and a suite of environmental inputs, the ST4955 series is ideal where extended field life, accurate location and remote management matter. Plaspy integration brings the device’s location, accelerometer events and sensor streams into a single fleet management and anti-theft monitoring interface for immediate operational insight.

## Key Highlights

- Solar-powered design with internal Li‑ion battery options \(5,200 / 7,800 / 10,050 mAh\) for extended autonomous operation outdoors.
- Cellular connectivity on LTE Cat. M1 and NB‑IoT with 2G \(EGPRS\) fallback for resilient telemetry and real-time tracking under varied network conditions.
- High-sensitivity 56‑channel u‑blox GNSS \(GPS/GLONASS\) with SBAS support and typical accuracy around ±2.5 m CEP for precise positioning.
- Ultra-low power modes \(active 30–60 mA; sleep 3.5 mA; deep sleep \<10 µA\) to support multi‑month or multi‑year deployments depending on reporting intervals.
- Optional BLE and Wi‑Fi positioning plus environmental sensors \(temperature, humidity, light, barometric pressure\) and 1‑wire temperature probe support for telemetry beyond location.
- Rugged IP67 enclosure \(IP65 with humidity sensor option\), wide operating temperature range and industry certifications \(CE, FCC, IC, PTCRB\).
- Remote firmware upgrades \(OTA/FOTA\) and standard TCP/UDP transport for secure, manageable device lifecycles.

## How It Works with Plaspy

The ST4955 series transmits GNSS fixes and sensor telemetry over cellular networks \(LTE Cat M1 / NB‑IoT with 2G fallback\) using TCP/UDP. Plaspy ingests these telemetry packets, decodes location, accelerometer events and environmental sensor data, and presents them via real-time tracking, alerts and historical reports. This tight integration enables fleet management teams and asset owners to act on location and condition data immediately.

- Real-time location and telemetry updates delivered to Plaspy for mapping and geofence alerting.
- Movement and impact detection from the built‑in 3‑axis accelerometer for anti‑theft and recovery workflows.
- Environmental sensor streams \(temperature, humidity, light, barometric pressure\) and 1‑wire temperature probe data for condition monitoring of sensitive assets.
- Optional Bluetooth sensors for localized telemetry collection and BLE beacon support.
- Remote firmware updates \(OTA\) and device health reporting via Plaspy for scalable fleet maintenance.

## Technical Overview

| Connectivity | LTE Cat. M1 and NB‑IoT \(primary\) with EGPRS \(2G\) fallback; TCP/UDP transport |
| --- | --- |
| Bands | Wide set of LTE Cat M1 / NB‑IoT bands \(see manufacturer datasheet\); EGPRS 850 / 900 / 1800 / 1900 MHz for fallback |
| Power & Battery | Internal Li‑ion battery options \(3.6 V: 5,200 mAh, 7,800 mAh, 10,050 mAh\); solar panel input \(5.5 V DC\) and 12 V DC quick charge supported; typical consumption: active 30–60 mA, sleep 3.5 mA, deep sleep &lt;10 µA \(without sensors\) |
| Interfaces | External power / ground, optional 1‑wire interface for temperature probes, LED indicators for network and GNSS status |
| GNSS | 56‑channel u‑blox receiver \(GPS/GLONASS\) with SBAS \(WAAS, EGNOS, MSAS\); typical accuracy ≈ ±2.5 m CEP \(50%, 2D RMS, -130 dBm, &gt;6 satellites\); TTFF cold &lt;35 s, warm/hot &lt;1 s; sensitivity −167 dBm \(tracking\) |
| Bluetooth | Optional BLE for sensors and beacons \(model-dependent\) |
| Remote Management | Over‑the‑air firmware upgrades \(OTA/FOTA\) and remote configuration via standard telemetry channels |
| Certifications & Environmental | IP67 enclosure \(IP65 with humidity sensor option\); operating range −20°C to +60°C; CE, FCC, IC, PTCRB certified |
| Form Factor | 97.4 mm × 130 mm × 37.5 mm; weights ≈ 300 g \(5,200 mAh\), 350 g \(7,800 mAh\), 370 g \(10,050 mAh\) |

## Use Cases

- Long-term asset tracking for non‑powered equipment: solar charging and low standby draw extend field deployments for months to years.
- Fleet management and real-time tracking of trailers, rental equipment and off‑road vehicles where cellular telemetry is required.
- Anti‑theft and recovery operations: accelerometer events and persistent GNSS tracking help locate moved or stolen assets.
- Construction, mining and remote site equipment monitoring where rugged IP67 packaging and wide temperature tolerance are essential.
- Environmental and condition monitoring: built‑in and optional sensors plus 1‑wire probe support deliver temperature and humidity telemetry for sensitive assets.

## Why Choose This Tracker with Plaspy

The ST4955 series pairs long-term outdoor performance with the Plaspy platform to deliver actionable, real-time tracking and telemetry. Its solar charging and ultra-low-power modes minimize maintenance, while multi‑network cellular connectivity \(LTE Cat M1 / NB‑IoT with 2G fallback\) keeps data flowing from remote sites. Plaspy presents GNSS location, accelerometer events and environmental sensor data in map, alert and report views for streamlined fleet management and anti‑theft workflows.

For mixed telemetry scenarios — including integration with vehicle systems that provide ignition, fuel monitoring or immobilizer status — Plaspy can correlate external feeds with the ST4955’s location and sensor streams to provide consolidated insight. OTA firmware updates, optional BLE sensor support and rugged, certified hardware make the ST4955 family a scalable, Plaspy compatible choice for long-term outdoor asset tracking and remote monitoring. See the manufacturer's product leaflet and technical downloads for detailed configuration and installation guidance.

