---
slug: /nvs/navitrek_um_04/protocol
id: navitrek_um_04-protocol
sidebar_label: Protocol
title: NVS - Navitrek UM-04 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for NVS Navitrek UM-04 GPS tracker and how it communicates with Plaspy for fleet monitoring and integration
keywords:
  - NVS Navitrek UM-04 protocol
  - Navitrek UM-04 GPS protocol
  - NVS GPS tracker protocol
  - Navitrek protocol Plaspy
  - vehicle tracking protocol
  - tracker compatibility Plaspy
  - transport monitoring protocol
  - Navitrek UM-04 communication
  - NVS tracker integration
  - fleet tracking Plaspy
---

# NVS - Navitrek UM-04 Protocol

This page covers the public protocol context for using the NVS Navitrek UM-04 tracker with the Plaspy platform. It outlines how the device typically communicates with Plaspy, which connection endpoints are used, and what role the tracker reporting protocol plays in reliable location and status reporting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to its endpoint. Exact protocol behavior for the Navitrek UM-04 can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on general, non sensitive protocol context and integration guidance.

## Protocol Overview

The communication protocol of the Navitrek UM-04 enables the device to report navigation data, vehicle condition, and event notifications to a remote server such as Plaspy. At a high level, the protocol defines how the tracker identifies itself, how it transmits location and status updates, and how the server acknowledges or responds to incoming reports.

- Enables transmission of GNSS derived position data and basic vehicle telemetry to a server
- Carries identifiers that allow Plaspy to associate reports with a specific device and fleet record
- Supports event and alarm reporting so dispatch centers can receive timely notifications
- Allows two way information exchange where supported by the device and server implementation
- Works together with transport layer choices to provide resilient delivery of tracking data

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic on a single shared endpoint and automatically determines the device protocol based on the incoming connection. In practice this means minimal configuration is needed inside the Plaspy platform when a Navitrek UM-04 is set to report to Plaspy endpoints.

- Plaspy listens on a common server endpoint to accept device reports
- The platform automatically detects the tracker protocol from incoming device traffic
- Users generally do not need to select a protocol manually in Plaspy when the device is correctly configured
- Proper device identification and reporting frequency help Plaspy match messages to the right vehicle record
- If multiple transport options exist on the device, Plaspy can accept reports over the supported transport without protocol selection by the user

## Transport and Connection Context

The Navitrek UM-04 can be configured to send data over standard transport layers supported by many trackers. For Plaspy integration, the device may be configured to report to the Plaspy endpoint using either UDP or TCP on the shared port. Devices can point at the server by hostname or IP depending on configuration constraints.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and network requirements
- Plaspy server domain for device reporting is d.plaspy.com and the known public server IP is 54.85.159.138
- All devices in Plaspy use the same port which simplifies device configuration and firewall requirements
- Choose UDP for lower overhead or TCP when connection reliability and delivery confirmation are preferred, depending on device capability
- Network routing, NAT, and carrier behavior can affect transport selection and should be tested in a representative environment

## Protocol Compatibility Notes

- Firmware revisions on the Navitrek UM-04 can change how fields are encoded or which telemetry options are available
- Hardware revisions may alter available IO, additional sensors, or behavior of alarm reporting
- Manufacturer supplied configuration tools and documentation are the authoritative source for device specific protocol options
- Transport selection between UDP and TCP may need to be adjusted for carrier or firewall conditions
- Confirm that the device is pointed to the Plaspy endpoint d.plaspy.com or 54.85.159.138 and using port 8888 for the simplest integration
- When integrating into third party monitoring systems, validate that event types and telemetry units match your back end expectations

## Why Protocol Understanding Matters

Understanding the public aspects of the Navitrek UM-04 communication protocol helps ensure reliable setup, effective troubleshooting, and consistent long term operation with Plaspy. Having a clear picture of how the tracker reports data reduces integration friction and improves operational visibility.

- Helps ensure the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888
- Reduces troubleshooting time when data is missing or events are not reaching the server
- Clarifies whether to use UDP or TCP for your deployment constraints and network environment
- Enables realistic expectations about which telemetry fields and events will be available to Plaspy
- Supports planning for firmware updates, hardware replacements, and fleet scale rollouts

## Why Use Plaspy with This Protocol

Using the Navitrek UM-04 with Plaspy provides a straightforward path to centralized vehicle monitoring, alarm notifications, and basic telemetry reporting. Plaspy’s automatic protocol detection and single shared port approach simplify device onboarding and reduce configuration errors when deploying at scale.

If you would like to learn more about how Plaspy works with devices like the Navitrek UM-04, visit https://www.plaspy.com. For the latest device specific protocol documentation, firmware notes, and manufacturer implementation details please verify current information at the official NVS site https://www.nvs-ts.ru/. Protocol support and firmware behavior may change over time so consulting manufacturer documentation is recommended.
