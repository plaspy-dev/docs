---
slug: /totemtech/at07_3g/protocol
id: at07_3g-protocol
sidebar_label: Protocol
title: Totemtech - AT07-3G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Totemtech AT07-3G and how it communicates with Plaspy for reliable GPS tracking
keywords:
  - Totemtech AT07-3G protocol
  - Totemtech AT07-3G GPS
  - AT07-3G Plaspy compatibility
  - Totemtech GPS tracker protocol
  - AT07-3G communication protocol
  - vehicle tracking Totemtech AT07-3G
  - Plaspy tracker integration
  - Plaspy device protocol
  - AT07-3G tracking protocol
  - Totemtech tracker configuration
---

# Totemtech - AT07-3G Protocol

This page describes the public protocol context for using the Totemtech AT07-3G tracker with the Plaspy platform. It focuses on how the device communicates at a high level, what connection endpoints are used by Plaspy, and which aspects of the tracker interaction are most relevant when integrating the AT07-3G into a fleet or asset monitoring workflow.

The Totemtech AT07-3G is a versatile device with features such as dual server reporting, a 3-axis accelerometer for movement detection, Micro SD storage, OTA firmware upgrades, and multiple communication channels including GPRS and SMS. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker protocol governs how the AT07-3G reports location, status, alarms, and telemetry to a remote server and how the server can issue remote commands or configuration when supported. For the purposes of Plaspy integration, the key role of the protocol is to deliver usable position and event data in a way the server can interpret and store.

- Enables periodic and event driven transmission of GPS positions and movement status to a remote endpoint
- Carries alarm and I/O state information such as overspeed, power loss, SOS, and tremble alerts
- Supports simultaneous reporting to two servers, which can improve redundancy or allow local and cloud collection
- Allows firmware upgrades and configuration changes to be applied remotely when OTA is available
- Facilitates storage of raw or aggregated telemetry on Micro SD when continuous connectivity is not available

## How Plaspy Detects the Protocol

Plaspy accepts incoming tracker connections on a single shared endpoint and port and will automatically determine which supported tracker protocol the incoming data matches. In most cases a correctly configured AT07-3G device that reports to the Plaspy endpoint will be recognized without manual protocol selection inside the Plaspy platform.

- Plaspy listens on the domain d.plaspy.com and on the public server IP 54.85.159.138
- The shared port for all devices on Plaspy is 8888 and Plaspy uses the same port for every supported tracker
- Plaspy automatically detects the tracker protocol when telemetry is received on the shared endpoint
- Users typically do not need to choose a protocol in Plaspy if the device is configured to report to the Plaspy endpoint
- Ensure the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 to allow automatic detection

## Transport and Connection Context

Connection options for the AT07-3G depend on device configuration and firmware capabilities; the tracker can use packet based mobile data or fallback channels for commands and configuration. For Plaspy integration the transport layer and destination address are the essential connection details.

- The AT07-3G may be configured to use either UDP or TCP on port 8888 depending on device support and settings
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138
- Plaspy uses port 8888 for all supported devices, simplifying firewall and network configuration
- When using cellular data ensure that the carrier allows the selected transport (UDP or TCP) and that APN settings are correct
- Using the device dual server feature, one server address can be set to Plaspy while the other is used for local or vendor services

## Protocol Compatibility Notes

- Firmware versions and OTA updates can change how a device formats and sends telemetry; validate behavior after firmware changes
- Hardware revisions or optional accessories may introduce variations in supported messages or I/O reporting
- Transport choice (UDP vs TCP) can affect delivery characteristics; test the tracker in your expected network environment
- Dual server reporting may be used for redundancy but confirm server selection order and reporting intervals in the device settings
- Manufacturer configuration tools or SIM based SMS commands may be required to set the reporting server and transport
- Always cross reference compatibility statements with the device vendor documentation for firmware specific behavior

## Why Protocol Understanding Matters

A practical understanding of the tracker reporting protocol helps ensure reliable setup, accurate data capture, and efficient troubleshooting when the AT07-3G is used with Plaspy. Knowing which aspects of the communication are fixed and which vary by firmware or configuration reduces integration time and operational surprises.

- Confirms the correct transport and endpoint are configured so data reaches Plaspy reliably
- Helps diagnose common issues such as network firewalls, carrier restrictions, or incorrect APN settings
- Clarifies expectations for event reporting frequency, alarm semantics, and movement detection using the accelerometer
- Guides planning for storage and telemetry retention when Micro SD logging is used as a fallback
- Supports maintenance planning around OTA updates that may alter reporting behavior

## Why Use Plaspy with This Protocol

Using the Totemtech AT07-3G with Plaspy provides organisations with centralized visibility into positions, movement events, and alerts reported by the tracker. Plaspy's automatic protocol detection and single shared endpoint simplify device onboarding and reduce the need for manual protocol selection when devices are correctly configured to report to the Plaspy server.

To learn more about Plaspy visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest device specific protocol information and firmware notes on the manufacturer website at http://www.totemtek.com/ before finalizing deployment.
