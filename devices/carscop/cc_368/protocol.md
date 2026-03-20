---
slug: /carscop/cc_368/protocol
id: cc_368-protocol
sidebar_label: Protocol
title: Carscop - CC-368 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Carscop CC 368 GPS tracker and how it communicates with Plaspy for live tracking and telematics
keywords:
  - Carscop CC-368 protocol
  - Carscop CC-368 GPS protocol
  - Carscop CC-368 Plaspy
  - Carscop tracker protocol
  - CC-368 telematics protocol
  - vehicle tracking protocol
  - GPS tracker protocol
  - Plaspy tracker compatibility
  - fleet management tracker
  - car sharing telematics
---

# Carscop - CC-368 Protocol

This page provides a public protocol overview for using the Carscop CC-368 4G T Box with Plaspy. It describes the communication context and practical considerations that operators and integrators should know when configuring the device to report location, telemetry, and event data to Plaspy for fleet management, car sharing, and rental workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. The CC-368 supports global cellular connectivity, GNSS positioning, OBD II CANBUS telemetry, BLE access and multiple I O options, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Proper device configuration and validation against current manufacturer documentation will help ensure reliable operation.

## Protocol Overview

The communication protocol for the CC-368 defines how the device reports GNSS coordinates, vehicle telemetry, I O and alarm events to a remote server and how remote commands are received. In the context of Plaspy, the protocol enables the device to be identified, authenticated, and to deliver structured telemetry and event messages that the platform can interpret for live tracking and automation.

- Enables periodic and event driven transmission of location and telemetry to a remote backend
- Communicates vehicle parameters collected via OBD II CANBUS and other onboard sensors
- Reports discrete event states such as ignition, door, shock, and alarm for automation and alerts
- Supports remote command reception for features like immobilizer control or remote start where permitted
- Provides fallback logging when network connectivity is lost so data continuity is maintained

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a single shared endpoint and uses automatic detection to identify the tracker protocol when a properly configured device reports in. This automatic detection means most users do not have to manually select a protocol inside Plaspy if the device is pointed at the Plaspy endpoint.

- Plaspy listens on the shared server endpoint d.plaspy.com and on the numeric address 54.85.159.138
- The platform accepts connections over the common port 8888 for device reporting
- Devices may be set to use either UDP or TCP transport to reach Plaspy on port 8888
- All devices in Plaspy use the same port which simplifies device configuration
- When the CC-368 is configured to report to the Plaspy endpoint, the platform will automatically detect the tracker protocol and associate incoming data with the account or device

## Transport and Connection Context

Connection setup is primarily about pointing the CC-368 at the Plaspy endpoint and selecting the appropriate transport for your deployment. The CC-368 can use cellular data for TCP IP or UDP reporting and may also support SMS or other fallbacks depending on firmware and configuration.

- Devices may be configured to report to the DNS name d.plaspy.com or directly to 54.85.159.138
- The device may use UDP or TCP on port 8888 depending on device support and chosen configuration
- Using the shared Plaspy port across devices simplifies firewall and network rules for integrators
- Ensure APN and cellular settings are correct so the CC-368 can establish outbound connections
- Network reliability and operator coverage will affect real time delivery and should be validated in the target region

## Protocol Compatibility Notes

- Firmware variations can change reporting intervals, available fields, or command behavior; check the installed firmware version when validating compatibility
- Hardware revisions sometimes introduce additional sensors or change available I O mapping; confirm the exact CC-368 SKU in use
- Manufacturer settings may allow switching between TCP and UDP transport; match the device transport to your network design and Plaspy expectations
- Some features such as remote engine start or immobilizer commands may depend on regional regulations and device configuration
- SMS fallback or alternative reporting channels can be available; verify these options if cellular data is unreliable
- Always validate device behavior against the official manufacturer documentation before mass deployment

## Why Protocol Understanding Matters

Understanding the communication protocol helps operators and integrators set up the CC-368 correctly, ensure data arrives at Plaspy as expected, and troubleshoot issues more effectively. Knowing the general reporting behavior and where to look when messages are missing reduces downtime and supports consistent telemetry for operations.

- Speeds initial device onboarding by clarifying required endpoint and transport settings
- Helps map OBD II and sensor fields to platform telemetry and dashboards
- Enables faster root cause analysis for missing reports or unexpected event behavior
- Informs decisions about transport selection, network provisioning, and firewall rules
- Supports planning for firmware updates and staged rollouts to preserve service continuity

## Why Use Plaspy with This Protocol

Using the Carscop CC-368 with Plaspy gives operators a practical path to combine rich vehicle telemetry, GNSS location, and remote control features in a single platform. Plaspy can ingest the CC-368 telemetry stream for live dashboards, historical route storage, event driven alerts, and remote command workflows that support car sharing, rental operations, and fleet monitoring.

If you want to explore how the CC-368 works with Plaspy in your environment, learn more about the platform at https://www.plaspy.com. Protocol support, firmware behavior, and specific device implementation details can change over time, so please verify the latest device documentation and firmware notes on the manufacturer site at http://www.carscop.com/ before large scale deployments.
