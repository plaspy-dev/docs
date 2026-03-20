---
slug: /skypatrol/tt_9200/protocol
id: tt_9200-protocol
sidebar_label: Protocol
title: SkyPatrol - TT 9200 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the SkyPatrol TT 9200 GPS tracker and its communication with Plaspy for fleet and asset tracking
keywords:
  - SkyPatrol TT 9200 protocol
  - SkyPatrol TT 9200 GPS protocol
  - SkyPatrol TT 9200 tracking protocol
  - SkyPatrol EDDIE+ protocol
  - TT 9200 Plaspy compatibility
  - GPS tracker protocol Plaspy
  - vehicle tracking Plaspy
  - TT 9200 communication protocol
  - Skypatrol GPS tracker
  - TT 9200 geofence protocol
---

# SkyPatrol - TT 9200 Protocol

This page covers the public protocol context for using the SkyPatrol TT 9200 tracker with Plaspy. It summarizes how the device communicates with Plaspy, the role of the device reporting protocol, and practical considerations around configuring the TT 9200 to report positions, geofence events, counters, and telemetry to a Plaspy server. The TT 9200 combines modern GPS chipsets with SkyPatrol EDDIE+ Custom Protocol and supports features such as circular and polygonal geofencing, route geofences, multiple counters, and ultra sensitive GPS reception.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Devices configured to report to the Plaspy endpoint will be accepted on the same server port used for all devices. Public Plaspy connection facts: the Plaspy endpoint domain is d.plaspy.com, the known server IP is 54.85.159.138, and Plaspy listens on port 8888. The TT 9200 may be configured to use either UDP or TCP on port 8888, and Plaspy automatically detects the tracker protocol when the device reports to the platform.

## Protocol Overview

The TT 9200 uses SkyPatrol's EDDIE+ Custom Protocol together with standard cellular reporting to deliver location and event data to a backend platform. The protocol defines how the tracker packages identifiers, position fixes, geofence and counter events, and status reports so a server like Plaspy can interpret and present them to users.

- Carries device identity and periodic location updates so Plaspy can map each report to the correct asset.
- Transmits geofence and route events that enable Plaspy to trigger boundary alerts and history playback.
- Sends counter and status information that can be displayed and trended in Plaspy dashboards.
- Supports low power reporting patterns which help the TT 9200 achieve long battery life.
- Works over standard cellular transport so the device can report globally using the built in quad band modem.

## How Plaspy Detects the Protocol

Plaspy accepts incoming reports on a single shared endpoint and port and uses automatic detection to recognize the tracker protocol being used. When a TT 9200 is correctly configured to report to Plaspy, manual protocol selection inside the platform is typically not required.

- Configure the device server to d.plaspy.com or the Plaspy server IP 54.85.159.138 and the port 8888.
- Select UDP or TCP on port 8888 according to the device firmware and network conditions.
- Ensure the device is sending its unique identifier so Plaspy can associate reports with the correct tracker account.
- Plaspy automatically detects the tracker protocol when valid reports arrive at the shared port used by all devices.
- If automatic detection fails, verify device configuration, firmware, and that the modem has network connectivity.

## Transport and Connection Context

Connection settings determine how the TT 9200 reaches Plaspy but do not change the higher level semantics of the EDDIE+ Custom Protocol. The device may use either UDP or TCP on port 8888 depending on device support and chosen configuration. Pointing the device to the Plaspy domain or IP with the correct port is the essential step for server side discovery.

- Plaspy server domain for reporting is d.plaspy.com.
- The Plaspy server IP known in public documentation is 54.85.159.138.
- Plaspy listens on port 8888 and all devices supported by Plaspy use this same port.
- The TT 9200 may be configured for UDP or TCP transport on port 8888.
- Carrier APN and SIM provisioning affect whether the tracker can reach Plaspy over the mobile network.

## Protocol Compatibility Notes

- Manufacturer firmware revisions can change message timing, available fields, and feature behavior.
- Hardware revisions or regional variants of the TT 9200 may implement features differently.
- Some advanced features such as large numbers of device based geofences or special counter types may require specific firmware support.
- The choice of UDP versus TCP can influence message delivery behavior and should match device capabilities.
- Network operator restrictions and APN settings can affect connectivity to d.plaspy.com or the listed server IP.
- Always validate device behavior with current SkyPatrol documentation and release notes.

## Why Protocol Understanding Matters

Understanding the TT 9200 communication protocol helps administrators and integrators set up devices correctly, troubleshoot connectivity or reporting gaps, and ensure that geofence and counter features behave as expected in Plaspy.

- Ensures initial configuration points devices to d.plaspy.com or the Plaspy IP and port 8888.
- Helps diagnose whether issues are related to transport selection UDP versus TCP or to SIM and APN settings.
- Clarifies how device features like geofences and counters map to Plaspy events and alerts.
- Aids planning for firmware updates and feature changes that affect reporting behavior.
- Improves long term reliability by aligning device settings with platform detection expectations.

## Why Use Plaspy with This Protocol

Using Plaspy with the SkyPatrol TT 9200 provides a straightforward way to centralize tracking, geofence monitoring, and counter based telemetry from devices deployed across regions. The TT 9200’s global GSM support, durable design, and EDDIE+ reporting capabilities make it well suited for fleet, asset, and personnel tracking that benefits from a platform that automatically recognizes and processes device reports.

If you want to learn more about how Plaspy works with devices like the SkyPatrol TT 9200 visit https://www.plaspy.com. For the most accurate and current details about device protocols, firmware behavior, and implementation specific features please verify information on the manufacturer site https://www.skypatrol.com/.
