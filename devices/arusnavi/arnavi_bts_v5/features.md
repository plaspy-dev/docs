---
slug: /arusnavi/arnavi_bts_v5/features
id: arnavi_bts_v5-features
sidebar_label: Features
title: Arusnavi - Arnavi BTS v.5 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for Arusnavi Arnavi BTS v.5 BLE sensor and how it integrates with Plaspy for fleet telemetry
keywords:
  - Arusnavi Arnavi BTS v.5
  - Arnavi BTS v.5 features
  - Arnavi BTS v.5 GPS tracker features
  - BLE temperature sensor
  - iBeacon tag
  - cold chain monitoring
  - Plaspy compatible BLE
  - contact sensor door detection
  - asset identification beacon
  - replaceable CR2477 battery
---

# Arusnavi - Arnavi BTS v.5 Features

This page provides a public, non sensitive overview of the Arusnavi Arnavi BTS v.5 feature set and how that device can be used with Plaspy. It focuses on practical, user facing capabilities and the ways BTS v.5 telemetry is typically routed into Plaspy when the device is seen by a Plaspy compatible BLE gateway or paired with Plaspy GPS gateways and trackers.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. The content below is based on publicly available device information and is meant to describe typical capabilities and integration patterns; always verify device specific details and the latest firmware behavior with the manufacturer documentation.

## Feature Overview

The Arnavi BTS v.5 is a compact BLE sensor and iBeacon tag designed to provide temperature readings, contact state detection, and beacon identity for asset tagging. When used with a Plaspy compatible BLE gateway or alongside Plaspy GPS devices, the BTS v.5 supplies environmental and state telemetry that complements location data in fleet and asset monitoring workflows.

- BLE advertising and iBeacon identity with configurable UUID MAJOR MINOR for asset identification
- Temperature sensing with frequent reporting options suitable for cold chain monitoring
- Contact or magnetic sensor for door open close detection and basic tamper awareness
- Configurable transmission interval and radio power to balance responsiveness and battery life
- Replaceable CR2477 coin cell for long term deployment in vehicle and container environments

## Core Features of Arusnavi - Arnavi BTS v.5

- Bluetooth Low Energy advertising and iBeacon compatible identity
- Temperature sensor with configurable reporting cadence
- Contact or circuit state input for door and tamper detection
- Configurable radio transmit power to adjust range and battery use
- Replaceable CR2477 battery for extended field lifetime
- Compact, mountable tag form factor suitable for vehicles and containers
- Mobile configurator support for iOS and Android to change beacon parameters and intervals

## How These Features Work with Plaspy

When an Arnavi BTS v.5 is within range of a Plaspy compatible BLE gateway or a vehicle gateway that collects BLE beacons, its advertising packets and sensor telemetry can be forwarded into Plaspy. Plaspy associates the incoming BLE telemetry with the correct asset or vehicle record so temperature, identity, and contact events appear alongside GPS and other fleet data.

- Temperature readings forwarded to Plaspy for live monitoring, thresholding, and historical charts
- Beacon identity values mapped to asset or compartment records for proximity based tagging
- Contact state events shown as discrete alerts or events for anti tamper and door monitoring
- Adjustable reporting reflected in Plaspy as update frequency changes for telemetry streams
- Historical telemetry retained in Plaspy to support compliance reports and post event analysis

## Typical Use Cases

- Cold chain logistics monitoring inside refrigerated trucks and containers
- Vehicle refrigerator telemetry for compliance and temperature excursion alerts
- Anti tamper and door open close detection for asset security workflows
- Asset identification of pallets, compartments, or equipment using iBeacon identity values
- Lightweight proximity based tracking and inventory checks in depots and warehouses

## Feature Availability Notes

- Firmware and hardware revisions can change available settings, reported metrics, and battery life estimates
- Installation method and placement will affect radio range and how frequently a gateway sees the device
- Regional variants or certified models may have different transmit power or regulatory markings
- Mobile configurator apps and manufacturer tools control beacon UUID MAJOR MINOR and reporting intervals
- For the most current limitations and capabilities consult the official manufacturer documentation

## Why Use Plaspy with These Features

Using the Arnavi BTS v.5 with Plaspy adds environmental and state telemetry to location based fleet data, enabling richer operational insight for cold chain, anti theft, and asset management workflows. Plaspy can consolidate temperature readings, contact events, and beacon identities with GPS feeds so operators see telemetry and location together in one platform.

To learn more about how Plaspy can incorporate BLE sensor data into fleet monitoring and reporting visit https://www.plaspy.com. For the latest Arnavi BTS v.5 technical specifications, firmware notes, and manufacturer guidance verify details on the official Arusnavi website https://www.arusnavi.ru.
