---
slug: /jointech/jt704/protocol
id: jt704-protocol
sidebar_label: Protocol
title: Jointech - JT704 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for the Jointech JT704 and how it communicates with Plaspy for real time and scheduled reporting
keywords:
  - Jointech JT704 protocol
  - Jointech JT704 GPS protocol
  - Jointech JT704 communication protocol
  - Jointech JT704 tracking protocol
  - JT704 Plaspy compatibility
  - container tracker protocol
  - container GPS tracker Plaspy
  - fleet management protocol
  - GPS tracker protocol Plaspy
  - Jointech container tracking
---

# Jointech - JT704 Protocol

This page covers the public protocol context for using the Jointech JT704 container tracker with Plaspy. It explains, in non sensitive terms, how the JT704 reports location and status data into Plaspy and what role the device reporting protocol plays in delivering usable telemetry for container monitoring and logistics workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Plaspy accepts device reports at d.plaspy.com and at the IP address 54.85.159.138 on port 8888. Devices may be configured to use UDP or TCP on port 8888. Exact protocol behavior, reporting cadence, and message content can vary by firmware version, hardware revision, and manufacturer implementation, so users should validate device settings against manufacturer documentation when necessary.

## Protocol Overview

The protocol used by the JT704 governs how the tracker sends identification, position, telemetry, and status updates to Plaspy so those messages can be translated into real time maps, event alerts, and historical reports. On container deployments the protocol supports both live position streaming and scheduled fixed time reporting to balance visibility and battery life.

- Enables the JT704 to identify itself and establish a reporting session with the Plaspy endpoint.
- Transports real time position updates as well as scheduled fixed time reports for long duration deployments.
- Conveys device status such as battery or power state so Plaspy can generate maintenance alerts and battery warnings.
- Supports event reporting useful for geofence alerts, movement detection, and route verification inside Plaspy.
- Works with the JT704 installation characteristics such as perforation free mounting to provide uninterrupted telemetry for long transits.

## How Plaspy Detects the Protocol

Plaspy receives data from devices at a single shared endpoint and uses automated detection to determine the tracker protocol so devices do not usually need a manual protocol selection inside Plaspy. If the JT704 is pointed to the Plaspy endpoint and using the supported transport, Plaspy will ingest and interpret incoming reports for display and processing.

- Plaspy accepts reports at d.plaspy.com and at the public IP 54.85.159.138 on port 8888.
- All devices in Plaspy use the same port, simplifying device configuration for large deployments.
- Devices may be configured to use either UDP or TCP on port 8888 depending on device capabilities and operator preference.
- When the JT704 is configured to report to the Plaspy endpoint, the platform automatically detects the tracker protocol and begins ingesting data.
- In most cases no manual protocol selection is required inside Plaspy if the device is correctly pointed to the Plaspy endpoint.

## Transport and Connection Context

Understanding the transport layer and connection settings is important to ensure the JT704 can reach Plaspy from its deployed network environment. The JT704 supports both continuous and scheduled reporting modes; which transport is used may affect battery life and connection reliability depending on the cellular environment.

- The JT704 may be set to report to d.plaspy.com or directly to 54.85.159.138.
- Devices may use UDP or TCP on port 8888 for sending reports to Plaspy.
- Using TCP can provide connection oriented delivery while UDP may be preferred in low overhead, scheduled reporting scenarios depending on the device settings.
- Network firewalls and carrier APN settings must allow outbound connections to the Plaspy endpoint on port 8888.
- When planning deployments, confirm the device APN and SIM provisioning are compatible with the chosen transport.

## Protocol Compatibility Notes

- Firmware versions can change message timing and available report fields; always check the installed firmware when validating behavior.
- Hardware revisions and optional sensor packages may alter which telemetry fields the JT704 sends to Plaspy.
- Manufacturer configuration options may allow switching between UDP and TCP reporting on port 8888; choose the transport that matches your network environment.
- Carrier network behavior such as NAT and private APNs can affect device reachability to d.plaspy.com or the IP address.
- Test new batches of devices in a staging environment before large scale deployment to confirm Plaspy ingestion and expected reporting cadence.
- When in doubt, validate compatibility and any firmware specific details against Jointech documentation.

## Why Protocol Understanding Matters

A practical understanding of the JT704 communication protocol helps operations teams and integrators ensure reliable reporting, troubleshoot connectivity issues, and design deployment plans that optimize battery life and data quality within Plaspy.

- Faster setup by confirming device reporting destination and transport are correct for Plaspy ingestion.
- More effective troubleshooting when connectivity or missing data issues appear in Plaspy.
- Better battery and reporting trade offs by aligning scheduled reporting parameters with operational needs.
- Clearer expectations for the kinds of telemetry Plaspy will receive based on device firmware and configuration.
- Reduced deployment risk through pre production testing and staged rollouts.

## Why Use Plaspy with This Protocol

Using the JT704 with Plaspy provides container visibility designed for long haul and cross border logistics where discreet installation and extended battery life matter. Plaspy ingests both real time and scheduled JT704 reports so logistics teams can monitor movement, generate geofence and compliance alerts, and maintain historical records for audits or customs workflows. The shared Plaspy endpoint and automatic protocol detection simplify large scale rollouts by removing the need to assign individual ports or protocols per device.

To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify device specific protocol and firmware information with the manufacturer at https://www.jointcontrols.com/ before large scale deployments.
