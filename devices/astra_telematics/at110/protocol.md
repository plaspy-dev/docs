---
slug: /astra_telematics/at110/protocol
id: at110-protocol
sidebar_label: Protocol
title: Astra Telematics - AT110 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context and connection guidance for Astra Telematics AT110 GPS tracker compatibility with Plaspy
keywords:
  - Astra Telematics AT110 protocol
  - Astra Telematics AT110 GPS protocol
  - AT110 GPS tracker protocol
  - AT110 Plaspy compatibility
  - Astra AT110 communication protocol
  - AT110 vehicle tracking protocol
  - AT110 GPRS TCP UDP
  - Plaspy supported devices
  - Fleet tracking Astra AT110
  - AT110 telematics protocol
---

# Astra Telematics - AT110 Protocol

This page covers the public protocol context for using the Astra Telematics AT110 GPS tracker with Plaspy. It explains how the device communicates in broad terms, what connection settings are used to reach Plaspy, and which aspects of the tracker behavior are most relevant when integrating with a fleet platform. The information here focuses on non sensitive, implementation neutral details that help with setup and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is pointed to the platform endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides practical guidance while recommending verification against manufacturer documentation for device specific details.

## Protocol Overview

The communication protocol of the AT110 defines how the tracker reports position, status, and telemetry to a remote server and how server side commands or configuration acknowledgements are exchanged in supported deployments. For integration with Plaspy, think of the protocol as the set of messages and behaviors that allow the tracker to identify itself and transmit usable location and state data to the platform.

- Enables periodic or event driven position reports such as time or distance based updates.
- Carries vehicle status and telemetry information that Plaspy converts to usable fleet data.
- Includes connection initiation steps so Plaspy can associate incoming streams with a specific device identifier.
- Works over mobile IP data via GPRS using TCP or UDP transport according to device configuration.
- May be affected by device power modes and internal buffering when connectivity is intermittent.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a unified endpoint and automatically determines the reported device protocol so manual protocol selection is normally not required. When an AT110 is configured to report to the Plaspy endpoint, the platform attempts to map incoming data to the correct device and decode standard fields needed for tracking and telematics.

- Plaspy listens on the shared host d.plaspy.com and the public server 54.85.159.138.
- The listening port used by all supported devices is 8888 and Plaspy uses this same port for device traffic.
- Devices may be configured to use either UDP or TCP transport on port 8888.
- If the AT110 is pointed to the Plaspy endpoint, Plaspy will attempt to detect the tracker protocol automatically.
- In most deployments users do not need to manually select a protocol inside Plaspy if the device is correctly configured to report to the Plaspy server.

## Transport and Connection Context

Connection context covers how the AT110 reaches the Plaspy service over mobile data and which host and port should be used in device configuration. The AT110 supports GPRS for data transport and can use either TCP or UDP depending on the device configuration and firmware capabilities.

- Configure the device to report to d.plaspy.com or directly to 54.85.159.138 for Plaspy connectivity.
- Use port 8888 for either TCP or UDP; Plaspy uses the same port for all devices.
- Transport selection between TCP and UDP depends on device settings, network reliability, and firmware options.
- Ensure the device APN and GPRS settings are correct so the tracker can establish the chosen transport to Plaspy.
- Keep in mind mobile network behavior and signal strength will influence how messages are delivered and when retries occur.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available features, and optional fields sent by the device.
- Hardware variants or accessory options such as CANBus or Bluetooth do not necessarily affect core reporting behavior but may add telemetry fields.
- Manufacturer configuration menus often allow selection of TCP versus UDP and the reporting server hostname or IP address.
- Device sleep modes, internal buffering, and backup battery behavior influence reporting frequency and data delivery during low power states.
- Validate device configuration and expected behavior against the official Astra Telematics documentation for your specific firmware and hardware revision.
- Confirm APN and mobile data plan compatibility to avoid connectivity issues when reporting to Plaspy.

## Why Protocol Understanding Matters

Understanding how the AT110 communicates helps ensure correct setup, predictable behavior, and effective troubleshooting when integrating with Plaspy. A basic grasp of transport choices, reporting triggers, and device power modes reduces integration time and improves reliability.

- Eases initial configuration so the device points to d.plaspy.com or the Plaspy server IP on port 8888.
- Helps choose TCP or UDP based on network conditions and expected delivery behavior.
- Clarifies how firmware updates or hardware revisions might change message content or timing.
- Supports efficient troubleshooting when expected reports do not appear in Plaspy due to APN, transport, or power state issues.
- Improves long term maintenance planning for fleets that rely on consistent telemetry and uptime.

## Why Use Plaspy with This Protocol

Using the Astra Telematics AT110 with Plaspy gives organizations a straightforward path to capture GPS positions, vehicle status, and basic telematics data using a proven device form factor. The combination of AT110 hardware capabilities and Plaspy platform detection simplifies onboarding by minimizing manual protocol selection and centralizing device traffic to a single Plaspy endpoint.

To learn more about how Plaspy works with devices like the AT110 visit https://www.plaspy.com. Please verify the latest AT110 protocol details, firmware behavior, and device implementation with Astra Telematics at https://astratelematics.com/ since protocol support and firmware features can change over time.
