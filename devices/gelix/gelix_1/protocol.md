---
slug: /gelix/gelix_1/protocol
id: gelix_1-protocol
sidebar_label: Protocol
title: Gelix - Gelix 1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Gelix 1 GPS data logger and guidance for configuring and integrating the tracker with Plaspy
keywords:
  - Gelix Gelix 1 protocol
  - Gelix 1 GPS protocol
  - Gelix tracker Plaspy compatibility
  - Gelix tracking protocol
  - Gelix GPS data logger
  - Gelix fleet tracking compatibility
  - Gelix 1 communication protocol
  - Plaspy device protocol
  - Gelix fleet monitoring
  - Gelix tracker integration
---

# Gelix - Gelix 1 Protocol

This page documents the public protocol context for using the Gelix 1 GPS data logger with Plaspy. It summarizes how the device communicates and how Plaspy receives data, focusing on high level connection and compatibility information rather than proprietary or firmware specific internals. Use this as a reference when planning integration, deployment, or troubleshooting with Plaspy.

The Gelix 1 is primarily a passive monitoring GPS logger that records navigation and event data during vehicle motion or when triggered by an external event. Data retrieval can occur automatically via a local radio access point such as Bluetooth or RF when the vehicle returns to a garage, or manually via wire, IrDA, Bluetooth with a PDA, or by removing the unit for PC transfer. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

At a high level, the device protocol describes how the Gelix 1 identifies itself, reports recorded or live navigation and event data, and signals status to a remote server. The protocol is the agreement between device and server that makes recorded GPS points and event logs usable by Plaspy for storage and analysis.

- Enables the Gelix 1 to present recorded navigation and event data to a remote endpoint for retrieval and processing
- Defines how the device identifies its unit ID and basic status so the server can associate records with the correct vehicle
- Governs periodic or event driven uploads so stored tracks and events reach Plaspy reliably
- Provides the framework for remote command responses or acknowledgements where supported by the device
- Allows Plaspy to interpret incoming device messages into position, timestamp, and event records for reporting and history

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared public endpoint and uses that connection to determine which tracker protocol a device is using. Because Plaspy automatically detects the tracker protocol, users typically do not need to specify a protocol inside Plaspy when the device is configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138
- The port used by Plaspy is 8888 and all devices in Plaspy use the same port
- Devices may be configured to use UDP or TCP on port 8888 depending on device capability and settings
- When a properly configured Gelix 1 reports to the Plaspy endpoint, the platform detects the protocol automatically
- Manual protocol selection inside Plaspy is rarely required if the device is pointing to the correct Plaspy endpoint and using the supported transport

## Transport and Connection Context

Connection context covers how the Gelix 1 reaches the Plaspy server and the transport options typically available. This section describes network level choices without describing proprietary payload details.

- The device may be configured using UDP or TCP on port 8888 depending on the Gelix 1 firmware and local setup
- Devices can point to the Plaspy server by domain name d.plaspy.com or directly to the IP 54.85.159.138
- All devices in Plaspy use the same port which simplifies network and firewall configuration for fleets
- Local retrieval options such as Bluetooth or RF for depot collection are independent of the remote upload transport
- Confirm the device transport mode (UDP or TCP) in Gelix 1 settings if uploads are not appearing on Plaspy

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can change protocol behavior or supported features; check device firmware level when assessing compatibility
- Manufacturer implementation choices sometimes vary between production batches which can affect optional fields or event handling
- Transport selection (UDP versus TCP) must match device configuration and any network or firewall rules in your environment
- Depot or local retrieval modes do not replace proper remote upload configuration if you want automatic reporting to Plaspy
- Validate device identifiers and reporting intervals to ensure records are attributed correctly in Plaspy
- When in doubt consult Gelix documentation for firmware specific notes and release changes

## Why Protocol Understanding Matters

Understanding the communication protocol and connection context helps ensure reliable data collection, faster troubleshooting, and predictable long term behavior for fleet deployments. Knowing how the Gelix 1 reports and how Plaspy accepts that data reduces configuration time and operational surprises.

- Speeds initial setup by confirming endpoint, transport, and reporting mode are correct
- Helps isolate issues between local retrieval methods and remote uploads to Plaspy
- Supports informed firmware update decisions by highlighting protocol changes that matter for server compatibility
- Improves troubleshooting when records are missing or timestamps and events appear inconsistent
- Enables planning for network and firewall rules because Plaspy uses a single standardized port for all devices

## Why Use Plaspy with This Protocol

Using Gelix 1 devices with Plaspy offers centralized visibility into recorded navigation and event data for fleets that rely on passive monitoring and periodic data retrieval. Plaspy’s automatic protocol detection and unified port usage make it straightforward to collect data from mixed device types while keeping network configuration simple.

If you manage vehicles that return to a central depot for automated radio collection or require manual retrieval options via PDA or PC, integrating Gelix 1 devices with Plaspy provides a practical way to consolidate historical tracks and event logs into a single platform. Learn more about Plaspy at https://www.plaspy.com and verify the latest Gelix device specific protocol and firmware details on the manufacturer site http://www.gelix.com/. Note that protocol support, firmware behavior, and device implementation details can change over time so confirming current documentation with the manufacturer is recommended.
