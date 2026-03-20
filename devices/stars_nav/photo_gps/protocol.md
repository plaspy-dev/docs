---
slug: /stars_nav/photo_gps/protocol
id: photo_gps-protocol
sidebar_label: Protocol
title: Stars Nav - Photo GPS Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Stars Nav Photo GPS integration with Plaspy server settings and compatibility
keywords:
  - Stars Nav Photo GPS
  - Stars Nav protocol
  - Photo GPS protocol
  - Stars Nav Plaspy compatibility
  - GPS tracker protocol
  - Photo geotagging tracker
  - GPS logging device
  - device protocol integration
  - GPS communication
  - tracking protocol
---

# Stars Nav - Photo GPS Protocol

This page describes the public protocol context for using the Stars Nav Photo GPS device with the Plaspy platform. It focuses on how the device can exchange usable location data and metadata with Plaspy, and what to expect from the communication layer when integrating this model. The information here is intended for system integrators, administrators, and technical users who want a clear overview of the communication relationship between the Photo GPS and Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behavior and available reporting features can vary depending on device firmware, hardware revision, and manufacturer implementation. For this device, the Photo GPS is primarily a removable storage logger that records text log files, but integration scenarios and reporting capabilities depend on the specific unit and firmware version.

## Protocol Overview

The protocol governing communication between a GPS tracker and a tracking platform defines how location, time, and status are packaged and delivered. For the Stars Nav Photo GPS, the public context centers on how recorded GPS data becomes usable in Plaspy, whether by direct reporting or by transferring logged files to a workflow that imports data into the platform.

- Provides a method for the device to deliver location and timestamp information to a backend system like Plaspy.
- Allows the tracker to identify itself and surface metadata that Plaspy can map to a device record.
- Enables delivery of position, speed, altitude, and time data in a format Plaspy can parse or import.
- Supports both live reporting scenarios and offline workflows that rely on exported log files.
- Defines the expectations for connection endpoints and transport behavior when the device can report to a network server.

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port for incoming tracker connections and automatically determines the correct protocol handler for supported devices. In most cases when a device is configured to report to the Plaspy endpoint, manual protocol selection inside Plaspy is not required.

- Plaspy server domain for device reporting is d.plaspy.com.
- The corresponding Plaspy server IP address is 54.85.159.138.
- Plaspy uses port 8888 for tracker connections and all devices use this same port.
- Plaspy automatically detects the tracker protocol for supported devices that report to the endpoint.
- Users typically only need to set the device to point to the Plaspy endpoint and choose the appropriate transport type if the device requires it.

## Transport and Connection Context

Transport and connection settings describe how the device reaches Plaspy and which network options it may use. For devices that support direct network reporting, the Photo GPS can be configured to use common transports and the Plaspy endpoint values below are the canonical settings to target.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The device may use UDP or TCP on port 8888 depending on device support and configuration options.
- All Plaspy supported devices use the same port 8888 for consistency across models.
- Choose UDP for lightweight, connectionless reporting or TCP when the device supports a persistent session, if required by the device firmware.
- Verify the transport option supported by your Photo GPS unit before changing network settings.

## Protocol Compatibility Notes

- The Photo GPS is primarily described as a removable storage logger that writes TEXT log files to a micro SD card; network reporting behavior may vary by unit and firmware.
- Firmware revisions and hardware variants can change available reporting features and supported transports.
- Manufacturer side configuration options or utilities may be required to enable network reporting if the unit supports it.
- Using TCP versus UDP can affect delivery semantics; confirm which transport your device supports and whether Plaspy should expect stateful connections.
- Always validate compatibility and the recommended configuration against the official Stars Nav documentation for your exact model and firmware.
- If a device does not natively report to a server, import workflows that use the device text logs remain a viable integration path.

## Why Protocol Understanding Matters

Knowing how the Photo GPS communicates helps ensure a reliable connection to Plaspy, reduces setup time, and clarifies the best path for data ingestion whether you use live reporting or file import workflows.

- Helps select correct transport and endpoint settings so the device successfully reaches Plaspy at d.plaspy.com or 54.85.159.138 on port 8888.
- Simplifies troubleshooting by narrowing whether issues are network, transport, firmware, or configuration related.
- Informs decisions about whether to use live reporting or an import pipeline based on the device capabilities.
- Aids in mapping logged TEXT fields such as longitude, latitude, altitude, time, speed, and direction into Plaspy data structures.
- Reduces integration delays by aligning expectations with the manufacturer documented features for each firmware version.

## Why Use Plaspy with This Protocol

Integrating Stars Nav Photo GPS data with Plaspy gives organizations a unified view of location data whether it arrives via live reporting or post capture import. Plaspy’s automatic protocol detection and consistent endpoint model reduce configuration complexity and help streamline bringing new devices online.

If you want to explore Plaspy integration options or confirm how the Photo GPS can be configured for direct reporting, learn more about Plaspy at https://www.plaspy.com. For the most current device specific protocol notes, firmware updates, and configuration instructions, please verify details with the manufacturer at http://www.starsnav.com/ since protocol support and firmware behavior can change over time.
