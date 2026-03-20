---
slug: /stars_nav/pt_33/protocol
id: pt_33-protocol
sidebar_label: Protocol
title: Stars Nav - PT-33 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for the Stars Nav PT-33 personal tracker and how it communicates with Plaspy for real time tracking
keywords:
  - Stars Nav PT-33 protocol
  - Stars Nav PT-33 GPS protocol
  - PT-33 Plaspy compatibility
  - PT-33 tracking protocol
  - personal tracker protocol
  - GPS tracker protocol Plaspy
  - Stars Nav tracker integration
  - PT-33 telemetry
  - PT-33 panic button alerts
  - PT-33 location logging
---

# Stars Nav - PT-33 Protocol

This page presents the public protocol context for using the Stars Nav PT-33 personal tracker with Plaspy. It focuses on how the device communicates in broad, non sensitive terms and what to consider when configuring the PT-33 to report location, alerts, and stored records into Plaspy for live tracking and historical review.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so this guidance covers the general communication context and practical compatibility considerations rather than firmware level specifics.

## Protocol Overview

The PT-33 reporting protocol governs how the device sends location fixes, alert events, and stored log downloads to a remote server so Plaspy can ingest and present that data. At the public level, the protocol defines what types of messages the tracker transmits and how those messages are delivered to Plaspy for mapping, alerts, and history.

- Carries position reports and timestamps so Plaspy can show real time location and reconstructed routes.
- Transmits event notifications such as panic button presses, geo fence entry and exit, and speeding alerts that drive Plaspy workflows.
- Supports bulk or log downloads so the PT-33 can forward stored records to Plaspy for historical analysis.
- May include configurable coordinate formats like NMEA or WGS84 to match mapping expectations.
- Works together with transport choices and server addressing so messages reliably reach Plaspy for parsing and display.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic at a single shared endpoint and port, and the platform automatically determines the tracker protocol based on the reported messages. In most common setups, a PT-33 that is correctly configured to report to the Plaspy endpoint will not require manual protocol selection in the Plaspy interface.

- Plaspy listens for device reports on the shared server endpoint d.plaspy.com.
- The platform also accepts direct connections to the server IP 54.85.159.138 for deployments that prefer numeric addressing.
- All devices supported by Plaspy use the same port 8888, simplifying device configuration.
- Plaspy automatically detects the tracker protocol when a device sends data to the Plaspy endpoint.
- Users typically need only to point the PT-33 at the Plaspy endpoint and verify transport settings on the device side.

## Transport and Connection Context

Transport choices determine how PT-33 messages are carried to Plaspy but do not change the public role of the protocol itself. The PT-33 can be configured to use different transport methods depending on device firmware and network environment, and that configuration affects how the tracker connects to Plaspy.

- The PT-33 may be configured to use UDP or TCP on port 8888 depending on device support and chosen settings.
- Devices can point to the Plaspy domain d.plaspy.com or to the server IP 54.85.159.138 when DNS resolution is not used.
- Using the shared port 8888 across devices reduces configuration complexity for deployments and provisioning.
- Transport selection influences delivery characteristics such as connection state and retransmission behavior, which is handled at the network layer.
- Ensure the device SIM and mobile operator allow the selected transport to reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware differences can change message timing, available event types, and optional fields. Check the device firmware notes for protocol-relevant changes.
- Hardware revisions may add or remove sensors or features that affect what the tracker reports to Plaspy.
- Manufacturer configuration utilities or SMS commands may control whether the PT-33 uses UDP or TCP and which server address it reports to.
- Some features such as panic button alerts, auto answer, and large onboard log transfers depend on both protocol support and the device firmware implementation.
- Network operator restrictions, APN settings, and SIM provisioning can affect the device ability to reach Plaspy even when protocol settings are correct.
- Validate compatibility and behavior against official Stars Nav documentation and perform end to end tests before large deployments.

## Why Protocol Understanding Matters

Understanding the PT-33 communication protocol at a high level helps ensure reliable setup, correct interpretation of device events, and effective long term operation with Plaspy. Knowledge of how the device reports position and alerts makes troubleshooting faster and reduces integration surprises.

- Confirms the device is pointed to the correct Plaspy endpoint and using the intended transport.
- Helps interpret event timing and expected update cadence for location and panic reports.
- Aids in diagnosing issues caused by firmware changes, network restrictions, or incorrect configuration.
- Supports planning for historical data uploads from the PT-33 on devices with large onboard memory.
- Enables informed conversations with the device manufacturer for firmware or feature related questions.

## Why Use Plaspy with This Protocol

Using the Stars Nav PT-33 with Plaspy gives organizations a compact, dependable source of position and event data for personal safety, asset monitoring, and incident response. The PT-33 provides accurate GNSS positioning from a u blox LEA 5S module, panic button alerts, auto answer capability, and extensive onboard logging that Plaspy can ingest for live maps, alerts, and historical review.

Plaspy simplifies device onboarding by using a single server endpoint and port for all supported trackers and automatically detecting the tracker protocol. To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and feature lists for the PT-33, verify information on the manufacturer site http://www.starsnav.com/ as protocol support and firmware behavior can change over time.
