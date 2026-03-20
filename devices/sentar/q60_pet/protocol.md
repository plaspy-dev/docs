---
slug: /sentar/q60_pet/protocol
id: q60_pet-protocol
sidebar_label: Protocol
title: Sentar - Q60 Pet Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Sentar Q60 Pet GPS tracker and how it communicates with Plaspy for reliable real time pet tracking and telemetry
keywords:
  - Sentar Q60 Pet protocol
  - Sentar Q60 Pet GPS protocol
  - Sentar Q60 Pet protocol for Plaspy
  - Sentar Q60 Pet communication protocol
  - Sentar Q60 Pet tracking protocol
  - Sentar GPS tracker protocol
  - Plaspy device protocol
  - pet tracker protocol
  - MTK2503 tracker protocol
  - GPS pet tracker compatibility
---

# Sentar - Q60 Pet Protocol

This page provides a public, high level overview of the communication context for using the Sentar Q60 Pet tracker with the Plaspy platform. It summarizes how the device reports position and basic telemetry to Plaspy, the transport options commonly used, and practical compatibility considerations based on the device description. The goal is to explain protocol context in safe, non sensitive terms so you can align device configuration with Plaspy expectations.

The Q60 Pet itself is a compact pet tracker built around the MTK2503 chipset with multi mode positioning (GPS, BDS, LBS and WiFi) and GSM/GPRS uplink via a Micro SIM. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact reporting behavior can vary by firmware version, hardware revision, and manufacturer implementation, so the information here focuses on general public protocol context rather than firmware specific details.

## Protocol Overview

At a high level, the device protocol defines how the Q60 Pet sends location, battery, and basic status information from the tracker to Plaspy so the platform can present maps, alerts, and telemetry. The protocol’s role is to transform sensor and radio data into a consistent uplink the server can interpret and record, while allowing the tracker to identify itself and indicate key state such as GPS fix type and battery level.

- Enables the tracker to report location fixes (GPS and assisted modes) and basic telemetry to Plaspy for map display and alerts.
- Carries device identification and status information so Plaspy can associate reports with the correct asset record.
- Supports multi mode positioning context so Plaspy can show whether a fix came from GPS, BDS, LBS, or WiFi assistance.
- Provides compact telemetry suitable for continuous pet monitoring where power and bandwidth are limited.
- Works over standard cellular data so the tracker can reach Plaspy from wide geographic coverage.

## How Plaspy Detects the Protocol

Plaspy is designed to accept device reports on a shared public endpoint and automatically determine the incoming tracker protocol when a properly configured device connects. In most cases you will not need to select a protocol manually within Plaspy as long as the tracker is set to report to the Plaspy endpoint and uses the expected transport settings.

- Plaspy receives tracker uplinks on the shared server endpoint d.plaspy.com and the server IP 54.85.159.138.
- All devices supported by Plaspy use the same server port and Plaspy automatically detects the tracker protocol.
- When a Q60 Pet is configured to report to the Plaspy endpoint, the platform will associate incoming reports with the device record and interpret telemetry.
- Typical setup requires pointing the device to Plaspy and confirming transport settings; manual protocol selection inside Plaspy is usually not required.
- If device reports are not appearing, checking network routing, SIM data, and endpoint configuration are practical first steps.

## Transport and Connection Context

The Q60 Pet communicates over GSM/GPRS for uplink to the server, and device configuration may allow either UDP or TCP transport. Plaspy accepts both transport types on the shared port so you can choose the mode that matches the device firmware and network environment.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and carrier behavior.
- Plaspy listens on port 8888 for all supported devices, so the same port is used platform wide.
- Trackers should be pointed to the Plaspy endpoint d.plaspy.com or directly to the server IP 54.85.159.138 if DNS is restricted.
- Transport selection (UDP vs TCP) can affect delivery behavior in poor networks; choose the option recommended by the manufacturer or your carrier.
- Ensure the device’s APN and data settings are correct so the tracker can establish GPRS data connectivity to Plaspy.

## Protocol Compatibility Notes

- Firmware and configuration options on the Q60 Pet can change how and when the device reports position and telemetry to the server.
- Hardware revisions or different production batches using the MTK2503 chipset may have slight differences in available features or default settings.
- Manufacturer-side configuration commands and provisioning methods vary; consult Sentar documentation when enabling or changing uplink behavior.
- Choosing UDP or TCP transport may be constrained by carrier NAT behavior or firmware defaults; verify which transport your device supports.
- Plaspy’s shared port and automatic protocol detection simplify server configuration but do not replace checking device-side reporting parameters.
- Always validate actual device behavior after configuration by confirming live reports appear in Plaspy and include expected telemetry fields.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure accurate setup, faster troubleshooting, and reliable long term tracking. Even though Plaspy auto detects incoming protocols, knowing the transport and reporting behavior of the Q60 Pet reduces setup friction and speeds resolution of issues.

- Helps confirm that the device is correctly pointed to d.plaspy.com or 54.85.159.138 and using port 8888.
- Makes it easier to diagnose missing reports by checking APN, SIM data, and whether UDP or TCP is in use.
- Informs expectations about how often the tracker sends updates and what telemetry fields should be present.
- Guides decisions about battery management and reporting intervals to balance runtime and data freshness.
- Supports future troubleshooting when firmware updates or hardware revisions change reporting behavior.

## Why Use Plaspy with This Protocol

Using the Sentar Q60 Pet with Plaspy gives pet owners a straightforward way to centralize location, battery, and status information into a single platform for real time visibility. The device’s multi mode positioning (GPS, BDS, LBS, WiFi) and compact design make it suitable for everyday pet monitoring, while Plaspy handles the server side of receiving, normalizing, and presenting the data for alerts, safe zones, and history.

If you want to learn more about how Plaspy works with trackers like the Q60 Pet, visit https://www.plaspy.com for platform information and deployment guidance. For device specific protocol details, firmware release notes, and the latest manufacturer instructions, please verify current information on the Sentar website at http://www.sentarsmart.com/. Protocol support and firmware behavior can evolve over time, so checking the manufacturer documentation ensures you have the most accurate device specific guidance.
