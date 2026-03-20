---
slug: /condor/cm_311/protocol
id: cm_311-protocol
sidebar_label: Protocol
title: Condor - CM-311 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Condor CM 311 compatibility with Plaspy real time tracking and connectivity
keywords:
  - Condor CM-311 protocol
  - Condor CM-311 GPS tracker
  - CM-311 Plaspy compatibility
  - Condor GPS protocol
  - pet tracker protocol
  - GPS tracker Plaspy integration
  - Condor tracking protocol
  - real time pet tracking
  - tracker communication protocol
  - device protocol Plaspy
---

# Condor - CM-311 Protocol

This page describes the public protocol context for using the Condor CM-311 tracker with Plaspy. It explains how the device communicates with Plaspy at a high level, what connection settings are used, and what to expect when integrating the CM-311 into the Plaspy real time monitoring environment. The CM-311 is a compact pet tracking device that transmits GPS location over cellular networks and is compatible with Plaspy for live tracking and route history.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior, reporting intervals, and available telemetry can vary by CM-311 firmware version, hardware revision, and manufacturer implementation. This page focuses on public, non sensitive protocol context to help with setup and troubleshooting while recommending verification of manufacturer documentation for firmware specific details.

## Protocol Overview

The CM-311 communicates GPS and basic telemetry data to the Plaspy cloud so owners can view live location, playback routes, and receive alerts. The device uses a cellular uplink to send periodic reports to the Plaspy endpoint where the information is normalized and surfaced in the platform.

- The protocol enables the tracker to transmit location and basic status data to Plaspy for real time display.
- Identification information from the device allows Plaspy to associate reports with the correct account and asset.
- Regular telemetry reports support route history and activity playback in the Plaspy interface.
- The protocol is the bridge between raw device reports and Plaspy telemetry services that provide alerts and visualization.
- Behavior such as reporting frequency and available fields can depend on the device firmware and configuration.

## How Plaspy Detects the Protocol

Plaspy accepts incoming reports at a shared network endpoint and automatically detects the tracker protocol used by a device when data arrives. For most users the device only needs to be configured to send its reports to Plaspy; explicit protocol selection inside Plaspy is typically not required.

- Plaspy uses a single server endpoint for device reporting at d.plaspy.com.
- The Plaspy server can also be reached at the public IP 54.85.159.138 for devices that prefer numeric addressing.
- All devices configured to report to Plaspy use the same port, so the platform can manage multiple tracker families consistently.
- Plaspy automatically detects the tracker protocol when it receives device reports at the shared endpoint.
- If a device is properly configured to send data to the Plaspy endpoint, manual protocol selection in the platform is rarely necessary.

## Transport and Connection Context

Connection transport and addressing are configuration choices on the CM-311 and similar trackers. Understanding the transport context helps ensure the device is pointed at Plaspy correctly and using the intended network protocol for reliable delivery.

- The CM-311 may be configured to use UDP or TCP on port 8888 depending on device capability and settings.
- Plaspy listens on port 8888 for device reports across all supported trackers.
- Devices may be set to send reports to the domain d.plaspy.com or directly to the IP address 54.85.159.138.
- Using the correct transport and destination ensures the device reaches the Plaspy endpoint and that automatic protocol detection can occur.
- Network level considerations such as carrier NAT or firewall rules can affect delivery and should be checked if reports do not arrive.

## Protocol Compatibility Notes

- Compatibility can vary between firmware revisions for the same CM-311 hardware, so confirm the firmware level if behavior differs from expectations.
- Hardware revisions or SKU differences may change available telemetry fields or transport options.
- Manufacturer configuration defaults might use a specific transport or server address; update the device to point to d.plaspy.com or 54.85.159.138 on port 8888 when integrating with Plaspy.
- Some advanced features found in vehicle trackers are not applicable to pet focused units like the CM-311; verify supported fields before depending on specific telemetry.
- Carrier and regional cellular behavior can influence reporting reliability and should be tested in the deployment area.
- Always cross reference the device behavior with Condor documentation to validate any device specific protocol details.

## Why Protocol Understanding Matters

Knowing how the CM-311 communicates with Plaspy helps ensure a smooth setup, faster troubleshooting, and reliable long term operation. A clear grasp of the transport and protocol context reduces guesswork when diagnosing missing reports or odd behavior.

- Ensures the device is pointed to the correct Plaspy endpoint and transport settings for successful reporting.
- Helps identify whether an issue is device side, network related, or server reception related.
- Aids in verifying that the firmware in use supports the telemetry fields your workflow depends on.
- Supports informed decisions about which transport mode to use for better reliability in your environment.
- Improves the speed of recovery when a device stops reporting by narrowing down likely causes.

## Why Use Plaspy with This Protocol

Using the Condor CM-311 with Plaspy provides pet owners and caretakers access to a mature real time tracking platform while keeping the device experience lightweight and focused. Plaspy converts incoming CM-311 reports into clear maps, route history, and configurable alerts so owners can monitor pets without needing to manage low level protocol details.

Plaspy’s shared endpoint and automatic protocol detection simplify device onboarding and reduce configuration overhead. To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer instructions verify information on the Condor site https://condorskyseeker.com/ since protocol support and firmware behavior can change over time.
