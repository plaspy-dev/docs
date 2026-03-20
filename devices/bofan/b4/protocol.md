---
slug: /bofan/b4/protocol
id: b4-protocol
sidebar_label: Protocol
title: Bofan - B4 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Bofan B4 tracker with Plaspy for reliable fleet and vehicle tracking
keywords:
  - Bofan B4 protocol
  - Bofan B4 GPS protocol
  - Bofan B4 Plaspy compatibility
  - Bofan B4 communication
  - Bofan B4 tracking
  - Bofan GPS tracker protocol
  - vehicle tracker B4 protocol
  - Plaspy device protocol
  - fleet tracking Bofan B4
  - Bofan B4 4G tracker
---

# Bofan - B4 Protocol

This page describes the public protocol context for using the Bofan B4 GPS vehicle tracker with Plaspy. It focuses on how the device communicates in broad terms, what connection settings are used, and what to consider when integrating the tracker with Plaspy for live tracking, geofence alerts, engine control, and other common features.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior for the Bofan B4 can vary with firmware version, hardware revision, and manufacturer configuration, so this page provides general guidance and practical notes rather than device firmware specifics.

## Protocol Overview

The communication protocol of the Bofan B4 governs how the tracker reports position, status, and alarms to a remote server and how remote commands such as engine cut or configuration requests are delivered. In the context of Plaspy the protocol enables the device to identify itself, transmit geolocation and input/output events, and support remote monitoring and control features.

- Enables periodic and event driven reporting so location and alerts reach the server for mapping and notifications.
- Carries identifying information so Plaspy can associate incoming messages with the correct device record.
- Transmits status signals used for geofence alerts, engine runtime monitoring, and remote engine cut actions.
- Supports both live GPRS reporting and fallback modes such as SMS for basic command and tracking functions.
- Works alongside device power management features to reduce GPRS usage when the vehicle is static.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a single shared endpoint and port and applies automatic protocol detection to identify the incoming tracker format. When a Bofan B4 is configured to report to Plaspy it typically does not require manual protocol selection inside the platform, provided the device is pointing to the correct server and port.

- Plaspy listens on the domain d.plaspy.com and the public IP 54.85.159.138 for incoming tracker connections.
- All devices report to the same port on Plaspy which simplifies configuration and device onboarding.
- Plaspy automatically detects tracker protocol patterns from the incoming messages so manual protocol selection is often unnecessary.
- Correct device reporting server settings on the B4 are the primary requirement for automatic detection to work.
- If detection or mapping does not succeed, reviewing device reporting settings and manufacturer configuration is the usual troubleshooting step.

## Transport and Connection Context

Bofan B4 devices may be configured to use either UDP or TCP transport depending on device capabilities and the chosen configuration. For Plaspy integration the key transport details to verify are the server address and the shared port used by the platform.

- Devices may be pointed to the Plaspy domain d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- The transport port used by Plaspy for all supported devices is 8888.
- The B4 can be configured to use UDP or TCP on port 8888 depending on device firmware and the installer preference.
- Using the correct transport protocol and pointing to the Plaspy endpoint ensures the device reaches Plaspy for automatic protocol detection.
- Network conditions, operator NAT, or firewall rules can affect UDP and TCP traffic differently; check connectivity if reports do not arrive.

## Protocol Compatibility Notes

- Manufacturer default settings for the Bofan B4 may target the vendor platform; you may need to change the device reporting server to Plaspy to enable communication.
- Firmware revisions and hardware tweaks can alter message timing, supported transport, or available features; always check firmware notes for changes.
- Some features such as remote engine cut and advanced inputs may require specific configuration or firmware support to work through a third party platform.
- Transport selection (UDP vs TCP) can affect reliability and should be chosen according to network conditions and device support.
- Validate device IMEI and device identifier mappings in Plaspy after configuring the reporting server to ensure correct device association.
- When in doubt, consult the manufacturer documentation for B4 configuration options before making platform changes.

## Why Protocol Understanding Matters

Understanding the role of the communication protocol helps ensure a smooth setup, reliable telemetry, and predictable behavior for fleet operations. Knowing what the protocol carries and how the device connects makes troubleshooting faster and helps administrators make informed configuration decisions.

- Ensures correct server and transport settings so devices consistently report to Plaspy.
- Helps diagnose why a device might fail to appear in the platform or why particular events are missing.
- Informs decisions about transport selection to balance reliability and data costs.
- Clarifies which features depend on device firmware or manufacturer settings versus platform configuration.
- Supports planning for firmware updates, hardware revisions, and long term device management.

## Why Use Plaspy with This Protocol

Using the Bofan B4 with Plaspy provides a straightforward way to centralize vehicle visibility, geofence management, event alerts, and remote control actions from a single platform. Plaspy’s automatic protocol detection and shared connection settings simplify onboarding so you can focus on operations rather than per device protocol selection.

If you want to learn more about Plaspy and how it handles device communication, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions for the Bofan B4, verify information on the manufacturer site https://www.bofancloud.com/ as protocol behavior and firmware features can change over time.
