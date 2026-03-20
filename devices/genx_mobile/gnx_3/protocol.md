---
slug: /genx_mobile/gnx_3/protocol
id: gnx_3-protocol
sidebar_label: Protocol
title: GenX Mobile - GNX-3 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the GenX Mobile GNX 3 tracker and how it communicates with Plaspy for reliable reporting
keywords:
  - GenX Mobile GNX-3 protocol
  - GenX Mobile GNX-3 GPS protocol
  - GNX-3 tracking protocol
  - GNX-3 communication protocol
  - GNX-3 Plaspy compatibility
  - Plaspy GNX-3 integration
  - GPS tracker protocol GenX Mobile
  - vehicle tracking GNX-3
  - GNX-3 accelerometer reporting
  - fleet management GNX-3
---

# GenX Mobile - GNX-3 Protocol

This page covers the public protocol context for using the GenX Mobile GNX-3 tracker with Plaspy. It explains how the GNX-3 communicates in general terms and what to expect when configuring the device to report location, motion events, and telemetry to Plaspy. The information here focuses on integration-level details and not on firmware internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and message content can vary with GNX-3 firmware versions, hardware revisions, and manufacturer configuration. For device specific framing and firmware notes consult the manufacturer documentation as needed.

## Protocol Overview

The GNX-3 communication protocol enables the tracker to deliver GPS location, movement events from the on board accelerometer, and other telemetry to a remote server so that Plaspy can present location and status to users. At a high level the protocol governs how the device identifies itself, how periodic and event reports are sent, and how the server interprets those reports for tracking and alerting.

- Provides device identification information so reports can be associated with a GNX-3 unit in Plaspy
- Delivers periodic location updates and event driven messages such as accelerometer detected events
- Transports telemetry that Plaspy uses for mapping, geofencing, and driver behavior analysis
- Supports configuration and reporting modes that may be adjusted on the device by the installer
- Enables reliable delivery of messages to the Plaspy endpoint for further processing and display

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a single shared endpoint and port and automatically detects the device protocol based on the traffic it receives. In most installation scenarios you do not need to select a protocol inside Plaspy if the GNX-3 is configured to report to the Plaspy server address and port.

- Plaspy listens on the shared server endpoint d.plaspy.com at IP 54.85.159.138 using port 8888
- Devices can be configured to report to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Plaspy uses the same port for all supported devices which simplifies configuration and deployment
- When the GNX-3 sends its first reports to the Plaspy endpoint the platform will match the incoming traffic to a compatible protocol profile
- Typically no manual selection of a protocol in Plaspy is required provided the GNX-3 is correctly pointed to the Plaspy endpoint

## Transport and Connection Context

The GNX-3 may use either UDP or TCP to deliver reports depending on device settings and firmware support. Configuring the correct transport and server address on the GNX-3 is an essential step to ensure messages reach Plaspy reliably.

- GNX-3 devices may be configured to use UDP or TCP on port 8888 depending on the device configuration
- The Plaspy server information for GNX-3 setup is d.plaspy.com or the IP 54.85.159.138 with port 8888
- All devices supported by Plaspy use the same port which makes uniform network rules easier to manage
- Ensure device APN and outbound firewall rules permit connections to the Plaspy server on port 8888
- Choose UDP or TCP on the device according to manufacturer guidance and network conditions

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or event behavior so verify the GNX-3 firmware level when troubleshooting
- Hardware revisions or optional sensor packs may alter the set of available telemetry the device reports
- Manufacturer side configuration options can affect whether the device uses UDP or TCP and which events are reported
- Always confirm transport selection and server address on the GNX-3 before attempting to register the device with Plaspy
- Validate compatibility and any firmware specific notes against official GenX Mobile documentation
- Network factors such as NAT, APN configuration, and carrier behavior can influence connectivity and should be checked during setup

## Why Protocol Understanding Matters

Understanding the GNX-3 communication protocol helps installers and operators configure the tracker correctly, diagnose connectivity or reporting issues, and ensure that event data such as accelerometer reports are available and actionable in Plaspy. A clear view of how the device communicates reduces setup time and improves long term reliability.

- Ensures the GNX-3 is pointed to the correct Plaspy endpoint and transport for reliable reporting
- Helps interpret why certain event types or telemetry are present or absent in the platform
- Aids troubleshooting when a device cannot connect or appears offline due to network or configuration issues
- Guides decisions about firmware upgrades and whether changes to reporting behavior are expected
- Improves accuracy of driver behavior and motion event analysis by confirming event reporting settings

## Why Use Plaspy with This Protocol

Using Plaspy with the GNX-3 provides a single, consolidated destination for GNX-3 reports and events so organizations can monitor vehicles, review driver behavior, and manage fleets from one platform. The shared Plaspy endpoint and consistent port usage reduce configuration complexity and allow operators to scale deployments with fewer server side adjustments.

To learn more about how Plaspy handles device reporting and to explore platform features visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware revisions verify information directly with the manufacturer at http://www.genxmobile.com/. Protocol support and implementation details can change over time so consulting the official GenX Mobile documentation is recommended when planning deployments.
