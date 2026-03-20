---
slug: /queclink/gb100mg/features
id: gb100mg-features
sidebar_label: Features
title: QuecLink - GB100MG Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the QuecLink GB100MG GPS tracker and how it integrates with Plaspy for fleet telematics and insurance use cases
keywords:
  - QuecLink GB100MG features
  - QuecLink GB100MG GPS tracker
  - GB100MG Plaspy compatibility
  - GB100MG crash telemetry
  - GB100MG BLE 4.2
  - GB100MG LTE Cat M1 NB1
  - vehicle tracker GB100MG
  - UBI tracker GB100MG
  - fleet telematics GB100MG
  - QuecLink GB130MG replacement
---

# QuecLink - GB100MG Features

This page provides a public feature summary of the QuecLink GB100MG and how its capabilities map to Plaspy for fleet telematics, usage based insurance, and operational monitoring. It covers the device capabilities that matter to Plaspy users and explains practical uses without delving into private or vendor only configuration details.

Exact feature availability can vary by firmware version, hardware revision, installation method and manufacturer implementation. Where applicable this page highlights the product highlights described by Queclink while recommending that integrators verify current behavior against official Queclink documentation and firmware notes.

## Feature Overview

The GB100MG is a compact, engine compartment mountable tracker designed for UBI and fleet telematics. It emphasizes reliable cellular connectivity, high resolution crash telemetry, BLE accessory support and a rugged IP67 enclosure for under-hood installations.

- Real time GPS tracking and position reporting suited for fleet oversight and insurance telematics
- High resolution crash and driving behavior telemetry via a built in high rate accelerometer
- Global LTE Cat M1 and NB1 cellular connectivity with 2G fallback for broad coverage and resilient reporting
- BLE 4.2 support to extend telemetry with compatible wireless accessories and sensors
- Large on device message buffer and multiple reporting triggers for reliable data capture when cellular connectivity is intermittent

## Core Features of QuecLink - GB100MG

- Compact IP67 rated enclosure designed for engine compartment installation and protection from moisture and dust
- LTE Cat M1 and NB1 cellular connectivity with EGPRS 2G fallback for broad area coverage
- Built in BLE 4.2 that enables wireless accessory and sensor pairing for additional telemetry
- High resolution 6 axis accelerometer with high sampling capability for detailed crash event capture
- On device buffering of up to 10,000 messages to preserve telemetry during temporary connectivity loss
- Multiple reporting modes including scheduled and trigger based reports for time distance and mileage workflows
- Reporting over TCP, UDP or SMS to accommodate different network conditions and platform ingestion

## How These Features Work with Plaspy

Plaspy ingests location and telemetry from compatible trackers like the GB100MG and surfaces that data through dashboards, alerts and reports to support operations, safety and claims workflows. Plaspy automatically detects supported tracker protocols and accepts device reports over common transport methods, allowing straightforward onboarding.

- Real time location updates and historical tracks visible in Plaspy dashboards for fleet monitoring
- Crash telemetry and high rate accelerometer traces used to generate event records for incident review
- Buffered message handling so Plaspy receives delayed reports and fills gaps after connectivity restores
- BLE accessory inputs available in telemetry streams can be presented as additional sensors within Plaspy
- Flexible reporting triggers from the device translate to rules and alerts in Plaspy for ignition, movement and other monitored states

## Typical Use Cases

- Usage based insurance programs that require driver behavior, mileage and crash telemetry for scoring
- Fleet management with live tracking, route monitoring and historical trip analysis
- Accident reconstruction and claims support using high fidelity accelerometer traces
- Anti theft and tow detection workflows that rely on ignition off movement and buffered alerts
- Fleet safety and driver coaching programs that monitor harsh events and driving patterns
- Sensor extension for cargo or environmental monitoring using BLE accessories

## Feature Availability Notes

- Firmware version and hardware revision can change available features and sampling behavior; confirm with the device firmware release notes
- Installation location and wiring practice affect some signals and event detection when mounted under the hood versus other locations
- Some capabilities such as BLE accessory behavior and maximum buffer retention depend on manufacturer configuration and regional variants
- The GB100MG was announced as phased out in 2022 and Queclink recommends the GB130MG as a current alternative for new deployments
- Always cross check manufacturer documentation for certification, regional band support and device limitations before deployment

## Why Use Plaspy with These Features

Pairing the GB100MG with Plaspy provides a practical path to operational visibility, combining robust on device telemetry with cloud based dashboards, rules and reporting. Organizations running UBI pilots, mixed fleets or claims workflows can use Plaspy to translate device events into alerts, historical records and management reports without extensive custom ingestion work.

To learn more about Plaspy and how it supports devices like the GB100MG visit https://www.plaspy.com. For the latest device specific feature details, firmware behavior and manufacturer guidance verify current information on the official Queclink site https://www.queclink.com/ as features and implementations may change over time.
