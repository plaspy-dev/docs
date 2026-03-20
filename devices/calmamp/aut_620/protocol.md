---
slug: /calmamp/aut_620/protocol
id: aut_620-protocol
sidebar_label: Protocol
title: CalmAmp - AUT-620 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CalmAmp AUT-620 device communication and Plaspy compatibility
keywords:
  - CalmAmp AUT-620 protocol
  - CalmAmp AUT-620 GPS
  - CalmAmp AUT-620 tracking
  - CalmAmp protocol
  - AUT-620 Plaspy
  - Plaspy device compatibility
  - asset tracker protocol
  - GPS tracker communication
  - vehicle tracking protocol
  - CalmAmp PEG alert engine
---

# CalmAmp - AUT-620 Protocol

This page provides public protocol context for using the CalmAmp AUT-620 asset tracker with Plaspy. It describes how the device communicates at a high level, how Plaspy receives device reports, and what aspects of the communication protocol are important when integrating the AUT-620 for long term asset monitoring. The information here is intended to explain connection and compatibility concepts rather than reproduce manufacturer technical manuals.

The AUT-620 is a battery operated asset tracker designed for long deployments with internal cellular and GPS antennas, a programmable event engine, and over the air serviceability. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer settings, so device configuration and firmware state influence the observable protocol behavior.

## Protocol Overview

The tracker protocol is the set of device behaviors and message formats that allow the AUT-620 to identify itself to a server, report location and event information, and receive remote configuration updates. With Plaspy, the focus of the protocol is reliable delivery of tracking reports and alert events from the device to the Plaspy backend so those messages can be processed and presented to users.

- The protocol enables the AUT-620 to send periodic or event driven position reports and status messages to a remote server.
- Device identification and basic metadata in the device reports allow Plaspy to associate incoming data with the correct asset profile.
- Event reporting from the device s programmable event engine supports exception based monitoring such as motion, geofence, or input changes.
- Over the air update and configuration channels are used by CalmAmp for firmware updates and rule provisioning, which interact with device behavior observed by Plaspy.
- The protocol behavior visible at the network level depends on device configuration and firmware, so similar models can show small differences in message frequency or event content.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared endpoint and automatically detects the tracker protocol used by an incoming device stream. When an AUT-620 is configured to report to Plaspy, the platform identifies the reporting device and routes messages into the correct processing pipeline without requiring manual protocol selection in most cases.

- Plaspy uses a single public server endpoint for device reporting at d.plaspy.com.
- The Plaspy server IP is 54.85.159.138 and the platform listens on port 8888 for device connections.
- All devices in Plaspy use the same port, simplifying device setup and server configuration.
- Plaspy automatically detects the tracker protocol when an authenticated or recognizable device report is received.
- Typically you do not need to manually select a protocol inside Plaspy if the AUT-620 is configured to report to the Plaspy endpoint.

## Transport and Connection Context

Transport selection and endpoint configuration determine how the AUT-620 reaches Plaspy. The device may be set up to use different transports depending on carrier support, firmware, and installer choices. Understanding the connection context is important for firewall rules and for ensuring reliable device reporting.

- The AUT-620 may be configured to use UDP or TCP on port 8888 depending on device support and configuration choices.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138 for reporting.
- Plaspy listens on the same port for all supported devices, so a single port 8888 is used across the fleet.
- Using the domain name d.plaspy.com can provide DNS level failover and easier hostname management for devices in the field.
- Confirm carrier and network settings allow the chosen transport and destination to reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions and PEG rule configurations on the AUT-620 can change the set of events and message timing the device emits.
- Hardware variants and radio firmware differences may affect supported transports or cellular network behavior.
- Transport choice between UDP and TCP can influence message delivery characteristics and should be matched to device configuration.
- Over the air services such as CalmAmp PULS can change device configuration and therefore change how the device appears to Plaspy after an update.
- Validate device reporting by confirming that the tracker is configured to send to d.plaspy.com or 54.85.159.138 on port 8888.
- Always cross check observed behavior with the manufacturer documentation when troubleshooting differences between devices.

## Why Protocol Understanding Matters

Understanding the communication protocol and connection context helps ensure successful device onboarding, accurate troubleshooting, and predictable long term operation with Plaspy. Knowing what to expect from the AUT-620 at the network level reduces integration time and helps isolate configuration or network issues quickly.

- Helps confirm the device is reporting to the correct Plaspy endpoint and port.
- Assists in diagnosing why expected events or positions are not arriving at the backend.
- Informs network and firewall configuration needed to permit device traffic to Plaspy.
- Guides decisions about transport selection and power management that impact reporting frequency.
- Supports coordination with CalmAmp OTA services when updating firmware or rules.

## Why Use Plaspy with This Protocol

Using the CalmAmp AUT-620 with Plaspy provides a practical approach to long term asset visibility and exception based monitoring. The AUT-620 s low power design, internal antennas, and programmable event engine make it a good candidate for deployments where battery life and flexible alerting matter. When configured to send reports to Plaspy, assets can be tracked centrally, alerts can be acted on, and historical data can be retained for operational analysis.

If you want to learn more about Plaspy and how it handles device communications, visit https://www.plaspy.com. Protocol behavior, firmware features, and manufacturer implementation details can change over time, so please verify the latest device specific information on the manufacturer website http://www.calamp.com/ before finalizing deployments.
