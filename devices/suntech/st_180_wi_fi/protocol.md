---
slug: /suntech/st_180_wi_fi/protocol
id: st_180_wi_fi-protocol
sidebar_label: Protocol
title: Suntech - ST 180 Wi-FI Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Suntech ST 180 Wi FI tracker and how it communicates with Plaspy servers
keywords:
  - Suntech ST 180 Wi FI protocol
  - Suntech ST 180 Wi FI GPS protocol
  - Suntech ST 180 Wi FI Plaspy
  - Suntech ST 180 Wi FI communication
  - ST 180 Wi FI tracking protocol
  - Suntech vehicle tracker protocol
  - Suntech OBD CAN data tracking
  - Suntech Wi FI GPS data offload
  - fleet management Suntech tracker
  - Plaspy tracker compatibility
---

# Suntech - ST 180 Wi-FI Protocol

This page documents the public protocol context for using the Suntech ST 180 Wi-FI tracker with Plaspy. It focuses on how the device communicates with Plaspy servers in broad, non sensitive terms and explains the role of the tracker reporting protocol in successful integration. The ST 180 Wi-FI is a vehicle tracker with local storage for GPS positions, Wi Fi download capability, support for CAN Bus and OBDII interfaces, and multiple transport options, and those capabilities are summarized here as they relate to communicating with Plaspy.

Plaspy uses shared connection settings across supported trackers and automatically detects the tracker protocol when devices report to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page emphasizes high level compatibility and configuration context rather than firmware specific details.

## Protocol Overview

At a high level the tracker reporting protocol is the mechanism the ST 180 Wi-FI uses to identify itself to a server, deliver position and telemetry data, and allow server side parsing and storage. For integration with Plaspy the public aspects of the protocol determine how data is carried over the network and which device features are available to the platform.

- Enables transmission of GPS positions and timestamps to a remote server so locations appear in Plaspy.
- Carries vehicle telemetry available from CAN Bus and OBDII when the ST 180 Wi-FI is configured to collect that data.
- Supports offload of internally stored positions over Wi Fi so memory data can be downloaded when in range of a network.
- Uses standard transport options supported by Plaspy so the device can report over either UDP or TCP depending on configuration.
- Provides event and input reporting such as ignition, digital inputs, and sleep mode state that Plaspy can record for fleet workflows.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and port and is designed to automatically detect the tracker protocol used by a device. In most cases a properly configured ST 180 Wi-FI reporting to the Plaspy endpoint will be recognized without manual protocol selection inside the platform.

- Plaspy server domain is d.plaspy.com and it also accepts connections to the server IP 54.85.159.138.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- The device may be configured using UDP or TCP on port 8888 according to device capabilities and local network requirements.
- When the tracker reports to the Plaspy endpoint the platform automatically detects the tracker protocol so manual protocol assignment is usually unnecessary.
- Ensure the tracker is configured to report to the Plaspy endpoint and that network routing and firewall rules allow outbound device connections.

## Transport and Connection Context

The ST 180 Wi-FI supports multiple transport methods and local Wi Fi offload that affect how it reaches Plaspy. Understanding the transport context helps with firewall configuration, network planning, and initial device commissioning.

- The device may use UDP or TCP on port 8888 depending on device support and configuration preferences.
- Devices may point to d.plaspy.com or the numeric address 54.85.159.138 as the server destination when reporting.
- Plaspy uses the same port for all supported devices which simplifies network rules for fleets and service providers.
- Wi Fi offload can be used to upload stored positions when the tracker is on a trusted network rather than using a GSM link.
- Check that NAT, firewall, and mobile operator settings allow outbound connections to the Plaspy endpoint on the specified transport and port.

## Protocol Compatibility Notes

- Firmware versions can change message timing, feature availability, and field contents, so behavior may vary between ST 180 Wi-FI units.
- Hardware revisions or optional CAN Bus/OBD interfaces may alter which vehicle telemetry values are reported.
- Manufacturer side configuration options can affect whether the device uses UDP or TCP and how it performs Wi Fi offload.
- Transport selection between UDP and TCP can influence reliability and packet retransmission behavior on mobile networks.
- Confirm any device specific configuration steps to point reporting to d.plaspy.com or 54.85.159.138 on port 8888 before expecting automatic detection.
- Validate compatibility against the official Suntech documentation for the exact hardware revision in use.

## Why Protocol Understanding Matters

A clear high level understanding of the ST 180 Wi-FI communication protocol helps teams plan deployments, troubleshoot connectivity, and ensure reliable data collection into Plaspy. Knowing how the tracker sends position and telemetry data reduces configuration cycles and supports predictable operation.

- Ensures correct server and port settings so the tracker reaches the Plaspy endpoint.
- Helps diagnose connectivity issues such as blocked ports, DNS resolution, or transport mismatches.
- Clarifies how on device storage and Wi Fi offload interact with live reporting to Plaspy.
- Aids mapping of CAN and OBD telemetry fields to fleet dashboards and reporting workflows.
- Supports decisions about using UDP or TCP based on network reliability and latency requirements.

## Why Use Plaspy with This Protocol

Using Plaspy with the Suntech ST 180 Wi-FI gives organizations a unified platform to collect GPS positions, vehicle telemetry from CAN Bus and OBDII, and event based data in one place. Plaspy’s automatic protocol detection and shared connection settings reduce setup complexity for fleet operators who deploy mixed hardware across vehicles.

If you want to learn more about how Plaspy can work with the Suntech ST 180 Wi-FI visit https://www.plaspy.com. For the most current and device specific protocol and firmware information consult the manufacturer documentation at http://www.suntechint.com/ since protocol support and firmware behavior can change over time and should be verified against the official source.
