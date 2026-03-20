---
slug: /queclink/gl33cg/protocol
id: gl33cg-protocol
sidebar_label: Protocol
title: QuecLink - GL33CG Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the QuecLink GL33CG with Plaspy for cargo tracking
keywords:
  - QuecLink GL33CG
  - QuecLink tracker protocol
  - GL33CG GPS tracker
  - GL33CG Plaspy
  - GPS tracking protocol
  - cargo tracker communication
  - RF433 tracking
  - LTE CAT1 tracker
  - LBS location tracking
  - Plaspy device compatibility
---

# QuecLink - GL33CG Protocol

This page explains the public protocol context for using the QuecLink GL33CG tracker with Plaspy. It summarizes how the device communicates in general terms, what to configure on the device to report to Plaspy, and which aspects of the tracker you should verify for successful integration. The GL33CG is a compact cargo recovery tracker with LTE CAT1 and 2G fallback, RF433 capability, LBS support, and onboard sensors that make it well suited for monitoring high value shipments.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware, hardware revision, and manufacturer implementation. For Plaspy the public endpoint is d.plaspy.com and the server IP is 54.85.159.138 on port 8888. Devices may be configured to use either UDP or TCP on port 8888. Plaspy uses the same port for all supported devices and Plaspy automatically detects the tracker protocol when the device reports correctly to the endpoint.

## Protocol Overview

The GL33CG reporting protocol is the mechanism by which the tracker sends location, status, and sensor information to a remote server. In practical terms this protocol enables the device to identify itself, report GPS or LBS location when GPS is unavailable, and transmit additional telemetry such as battery and temperature for use by Plaspy and other platforms.

- Provides device identification and session information so Plaspy can associate incoming data with a specific tracker.
- Delivers location data from GPS and LBS sources and supports reporting under cellular connections.
- Carries telemetry such as battery level and temperature readings that are useful for cargo monitoring.
- Works over the device mobile data link (LTE CAT1 with 2G fallback) to ensure coverage in a variety of transport environments.
- Operates alongside the unit’s RF433 signaling feature which is used for local search device detection and is separate from server reporting.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections to its shared endpoint and determines the appropriate handling for the tracker protocol automatically. In most common deployments you simply configure the GL33CG to report to Plaspy and the platform will map and process the device messages without requiring manual protocol selection.

- Set the device reporting server to d.plaspy.com or to the server IP 54.85.159.138 to route data to Plaspy.
- Configure the tracker to use TCP or UDP targeting port 8888 according to the device’s supported transport.
- When the tracker connects and sends its initial reports Plaspy reads the arrival and auto identifies the protocol and device identifier.
- There is usually no need to select a protocol inside Plaspy if the device is correctly pointed at the Plaspy endpoint and uses the supported transport.
- Ensure the device IMEI or configured device ID is available in the initial reports so Plaspy can register and map the unit to your account.

## Transport and Connection Context

Connection context covers how the GL33CG reaches Plaspy over the mobile network and what to check on the device side. The GL33CG can use LTE CAT1 with fallback to 2G, and Plaspy accepts both UDP and TCP connections on a single, standardized port to simplify setup.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138 depending on preference and provisioning.
- Plaspy accepts both UDP and TCP on port 8888; choose the transport according to what the device firmware supports and network conditions.
- All devices in Plaspy use the same port, which simplifies provisioning and firewall rules on the server side.
- Ensure APN settings, SIM data, and basic network connectivity are correct so the tracker can establish a session to the Plaspy endpoint.
- Be mindful of carrier NAT and firewall behavior that can affect inbound and outbound connectivity and test reporting after configuration.

## Protocol Compatibility Notes

- Firmware variations can change which reporting features are available and how messages are formatted; always verify the firmware version on your GL33CG.
- Hardware revisions or regional variants of the GL33CG may implement slightly different reporting behaviors or available sensors.
- RF433 is an independent local signaling feature and does not replace the device’s cellular reporting protocol used to reach Plaspy.
- Transport selection (UDP versus TCP) is a configuration choice that should match the tracker firmware capability and the network environment.
- LBS reporting provides a fallback when GPS is weak, but its accuracy and availability depend on local cell tower coverage and operator support.
- Validate compatibility and recommended configuration steps against QuecLink documentation for the GL33CG and any release notes for firmware updates.

## Why Protocol Understanding Matters

Understanding the communication protocol helps operators configure devices correctly, interpret the incoming data, and resolve connectivity issues more efficiently when using Plaspy. Being familiar with what the tracker reports and how it connects shortens onboarding time and reduces support cycles.

- Ensures the device is pointed to the correct Plaspy endpoint so data arrives without manual protocol selection.
- Helps diagnose connectivity problems such as incorrect APN, wrong server address, or transport mismatch.
- Clarifies what telemetry fields (battery, temperature, LBS) are expected so alerts and rules in Plaspy can be configured correctly.
- Supports planning for firmware updates and understanding how changes might affect reporting behavior.
- Aids in confirming that local RF433 use and cellular reporting are both functioning as intended for combined tracking workflows.

## Why Use Plaspy with This Protocol

Using the QuecLink GL33CG with Plaspy provides a consistent, centrally managed way to monitor cargo location and environmental telemetry across fleets or shipments. Plaspy’s automatic protocol detection and a single shared port reduce setup complexity, allowing organizations to focus on operational rules, alerts, and visibility instead of per device protocol selection.

To learn more about Plaspy and how the platform handles device data, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware revisions consult the official QuecLink documentation at https://www.queclink.com/ as protocol support and device behavior can change over time.
