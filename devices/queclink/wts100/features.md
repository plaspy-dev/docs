---
slug: /queclink/wts100/features
id: wts100-features
sidebar_label: Features
title: QuecLink - WTS100 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the QuecLink WTS100 temperature sensor and how it integrates with Plaspy for cold chain monitoring
keywords:
  - QuecLink WTS100
  - WTS100 features
  - WTS100 temperature sensor
  - QuecLink temperature sensor
  - cold chain telemetry
  - asset temperature monitoring
  - Plaspy compatibility
  - 433 MHz FSK sensor
  - low power temperature sensor
  - WTS100 EOL migration
---

# QuecLink - WTS100 Features

This page provides a public, non-sensitive feature overview of the QuecLink WTS100 and how its temperature telemetry can be integrated into Plaspy. It focuses on practical capabilities and how teams can use the WTS100 alongside fleet and asset data inside Plaspy when the sensor is forwarded through supported QuecLink receivers or gateways.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, regional variant, and how the WTS100 is paired to receivers or gateways. For device specific configuration, lifecycle details, and the latest manufacturer guidance consult QuecLink documentation.

## Feature Overview

The WTS100 is a compact, battery powered wireless temperature sensor intended for cold chain logistics and asset monitoring. It sends temperature telemetry to compatible QuecLink receivers which can forward the data into Plaspy for unified monitoring and alerting.

- Battery powered design with two AA cells for long unattended operation and reduced maintenance.
- Low power operation with up to three years standby life under typical reporting intervals for extended deployments.
- 433.92 MHz FSK wireless telemetry to compatible receivers and gateways for reliable sensor forwarding.
- Purpose built for refrigerated transport and storage with an operating range suitable for many cold chain scenarios.
- Simple in-field pairing via a side button and LED indicator to ease installation and device mapping.
- End of Life notice and recommended migration paths identified by the manufacturer for planning replacements.

## Core Features of QuecLink - WTS100

- Temperature telemetry reporting suitable for cold chain and asset environmental monitoring.
- Two AA battery power source and low power consumption profile with multi-year standby life under typical settings.
- 433.92 MHz FSK wireless transmission intended for use with compatible QuecLink receivers and gateways.
- Operating temperature range that supports refrigerated transport and many storage environments.
- Compact and lightweight form factor for discreet mounting on pallets, containers, or equipment.
- Side pairing button and LED status indicator for straightforward field commissioning and troubleshooting.
- Receiver sensitivity and RF link design for robust telemetry delivery in typical deployment scenarios.
- Manufacturer EOL notice with recommended migration guidance to successor products such as WTH301 or BLE alternatives.

## How These Features Work with Plaspy

When a compatible QuecLink receiver or gateway receives WTS100 telemetry and forwards it to your monitoring backend, Plaspy can present sensor data alongside fleet and asset records. This enables centralized condition monitoring and alert workflows that include temperature measurements.

- Temperature readings forwarded by gateways appear in Plaspy as telemetry points for real-time or near real-time monitoring.
- Battery and device health indicators reported by the receiver can be surfaced in Plaspy to support maintenance scheduling.
- Temperature threshold breaches and alarm events forwarded by the gateway can trigger Plaspy alerts and notifications.
- Simple pairing and device identification help map each physical sensor to a Plaspy device record for contextual reporting.
- Historical temperature data collected through Plaspy supports compliance reporting and trend analysis.
- Migration planning and replacement sensors can be tracked inside Plaspy as part of lifecycle management for deployed sensors.

## Typical Use Cases

- Continuous temperature monitoring for refrigerated trucks and shipping containers to detect excursions.
- Pallet or warehouse zone temperature tracking to protect temperature sensitive inventory.
- Remote field asset environmental sensing where mains power is not available.
- Correlating temperature conditions with fleet movements or specific shipments in Plaspy dashboards.
- Short term deployments and audits where easy installation and long battery life are priorities.
- Planned migration and replacement of EOL RF433 sensors with recommended alternatives.

## Feature Availability Notes

- Actual reporting intervals, battery life, and behavior depend on configured reporting frequency and ambient conditions.
- Firmware level and hardware revision can change available features and the format of telemetry forwarded by receivers.
- Regional hardware variants and RF regulations may affect radio behavior and permitted frequencies.
- Installation factors such as mounting location and proximity to receivers influence RF link quality and telemetry reliability.
- QuecLink has announced End of Life for RF433 accessories including WTS100; verify recommended replacements and migration timelines with the manufacturer.

## Why Use Plaspy with These Features

Integrating WTS100 temperature telemetry into Plaspy provides a consolidated view of environmental conditions alongside vehicle and asset data. For teams managing cold chain logistics, warehouse storage, or dispersed field assets, combining temperature readings with operational context in Plaspy helps accelerate response to exceptions and simplifies historical analysis.

To learn more about Plaspy and how it can incorporate QuecLink sensor telemetry visit https://www.plaspy.com. For the latest device specifications, firmware notes, and manufacturer guidance verify current details on the QuecLink website https://www.queclink.com/.
