---
slug: /sanav/gc_101/protocol
id: gc_101-protocol
sidebar_label: Protocol
title: Sanav - GC-101 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for the Sanav GC 101 and how it communicates with Plaspy for reliable fleet and asset tracking
keywords:
  - Sanav GC-101 protocol
  - Sanav GC-101 GPS protocol
  - Sanav GC-101 tracking protocol
  - Sanav GC-101 communication protocol
  - Sanav GPS tracker protocol
  - Sanav GC-101 Plaspy compatibility
  - vehicle tracking protocol Sanav
  - fleet management GPS protocol
  - GC-101 tracker integration
  - GPS tracker protocol Plaspy
---

# Sanav - GC-101 Protocol

This page covers the public protocol context for using the SANAV GC-101 tracker with Plaspy. It focuses on how the device reports position data and the connection settings required for Plaspy to receive that data. Information here is intended to explain the communication role of the tracker without describing private implementation details.

The GC-101 uses GPRS to upload RMC sentences containing latitude, longitude, speed, and time to an assigned server and supports both TCP and UDP transports. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary with firmware version, hardware revision, and manufacturer implementation. Always consult the device manufacturer for the most current, device specific details.

## Protocol Overview

The protocol used by the GC-101 is the mechanism by which the tracker sends position and status reports over mobile data to a remote server. For Plaspy, that means receiving RMC style position reports and interpreting them into usable location, time, and speed information for fleet and asset monitoring.

- The tracker uploads RMC sentence content to a configured server so latitude longitude speed and timestamp can be extracted.
- GPRS cellular data is used to deliver reports from the device to the Plaspy endpoint.
- The device can buffer data in internal memory and use a backup battery to preserve tracking during power loss.
- Transport can be configured over TCP or UDP to match network and server preferences.
- The protocol enables the tracker to identify itself and deliver periodic or event driven updates for fleet management and security tasks.

## How Plaspy Detects the Protocol

Plaspy accepts incoming tracker connections on a shared endpoint and port and will detect the protocol automatically when the device is configured to report to Plaspy. In most cases users do not need to select a specific protocol inside the platform if the device is correctly pointed to Plaspy.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138 and the listening port is 8888.
- All devices use the same port on Plaspy and the platform automatically detects the tracker protocol.
- Devices that send RMC style sentences and common tracker reporting formats are recognized without manual protocol selection.
- Proper device configuration to report to the Plaspy endpoint simplifies onboarding and reduces setup errors.

## Transport and Connection Context

Connection settings are an important part of successful integration. The GC-101 supports both TCP and UDP reporting and can be configured to target Plaspy by domain name or IP address depending on user or carrier needs.

- The device may be configured to use UDP or TCP on port 8888 for reporting.
- Devices can point to the domain d.plaspy.com or directly to the IP 54.85.159.138.
- Plaspy uses port 8888 for all supported devices which simplifies device configuration.
- Choose UDP for lower overhead or TCP for connection oriented delivery depending on the tracker configuration and mobile network behavior.
- Verify APN and mobile data settings on the device so GPRS uploads can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions can change message timing reporting fields and optional behaviors that affect how data is delivered to Plaspy.
- Hardware revisions or optional modules may alter supported transports or available inputs such as panic buttons or digital inputs.
- Manufacturer configuration menus may expose transport options TCP or UDP and the target server settings domain or IP.
- Network restrictions and carrier NAT can affect delivery especially when using UDP versus TCP.
- Confirm compatibility and recommended settings against Sanav documentation for your specific GC-101 firmware build.
- Where possible test a single device to validate connectivity and reporting before wide deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable device setup and ongoing operation when using Plaspy for fleet or asset tracking. Knowing what the tracker sends and how it connects reduces troubleshooting time and improves data reliability.

- It helps verify that RMC style reports include required fields like position time and speed for Plaspy to display accurate locations.
- Understanding transport choice guides selection between TCP and UDP for your network conditions.
- Awareness of firmware and hardware differences lowers the risk of unexpected behavior after updates.
- Proper configuration of server domain or IP and the port ensures the tracker reaches the Plaspy endpoint.
- Insight into device buffering and backup battery behavior supports planning for coverage gaps and power events.

## Why Use Plaspy with This Protocol

Using the SANAV GC-101 with Plaspy provides a straightforward path to collect RMC based GPS reports over GPRS and turn them into actionable fleet and asset visibility. Plaspy handles the common connection settings and protocol detection so you can focus on operational monitoring rather than low level parsing.

Learn more about how Plaspy works and supported integration options at https://www.plaspy.com. For the most current device specific protocol details firmware notes and manufacturer guidance verify information with Sanav at http://es.sanav.com/.
