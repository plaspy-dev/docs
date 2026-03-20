---
slug: /concox/gt06e/protocol
id: gt06e-protocol
sidebar_label: Protocol
title: Concox - GT06E Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Concox GT06E tracker integration with Plaspy server settings and connection context
keywords:
  - Concox GT06E protocol
  - GT06E GPS tracker protocol
  - Concox GT06E Plaspy
  - GT06E communication protocol
  - GT06E tracking protocol
  - Concox tracker compatibility
  - GT06E 3G tracker
  - Plaspy protocol detection
  - Fleet tracking GT06E
  - Vehicle tracking Concox
---

# Concox - GT06E Protocol

This page describes the public protocol context for using the Concox GT06E GPS tracker with Plaspy. It focuses on how the tracker communicates with the Plaspy server in general, what to expect from connection and transport settings, and how the protocol relates to common tracking features such as location reporting, alarms, and optional I O signals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page keeps the description at a public, non sensitive level and encourages verification against official manufacturer documentation.

## Protocol Overview

The communication protocol for the Concox GT06E defines how the tracker reports position, events, and status to a remote server and how remote configuration or commands may be sent back. In a fleet context, the protocol links device sensors and alerts to Plaspy so telemetry becomes usable information for monitoring and operations.

- Enables regular GPS position uploads and event driven reports such as SOS, overspeed, and geofence triggers
- Carries device identification and status information so Plaspy can associate reports with the correct asset
- Transports optional inputs and outputs such as door detection, audio visual alerts, and external power voltage data for richer fleet monitoring
- Supports reporting over cellular data so 3G connectivity from the GT06E provides timely updates to the platform
- Allows for remote configuration and control messages where the manufacturer and firmware support those capabilities

## How Plaspy Detects the Protocol

Plaspy accepts device reports at a single shared endpoint and automatically identifies the tracker protocol based on incoming connections. In most cases a properly configured device that points to the Plaspy endpoint will be recognized and begin reporting without requiring manual selection of a protocol in the Plaspy interface.

- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138
- The configured port for device reports is 8888 and Plaspy uses the same port for all supported devices
- Plaspy automatically detects the tracker protocol when data arrives at the shared endpoint
- Users typically do not need to manually choose a protocol inside Plaspy if the device is set to report correctly to the Plaspy endpoint
- Ensure the GT06E is configured to send reports to the Plaspy domain or IP and port so automatic detection can occur
- If a device does not appear to be detected, confirm device reporting settings and network reachability to the Plaspy server

## Transport and Connection Context

The GT06E can send reports over TCP or UDP depending on device configuration and firmware capability. Transport selection affects how the device establishes its session with the server and how retransmission or delivery is handled, so confirming the correct transport is part of a successful integration.

- The device may be configured using UDP or TCP on port 8888
- Devices can point to the Plaspy domain d.plaspy.com or the IP 54.85.159.138 for reporting
- Plaspy uses port 8888 for all devices to simplify configuration and detection
- TCP or UDP selection depends on the GT06E firmware and the configuration applied by the integrator or installer
- Network level considerations such as carrier NAT, APN configuration, and firewall rules can impact connectivity to the Plaspy endpoint
- Verify that mobile data connectivity and APN settings on the GT06E allow outbound connections to the Plaspy server

## Protocol Compatibility Notes

- Firmware versions can change message timing, available fields, and optional feature reporting for the GT06E
- Hardware revisions or optional modules may add or remove supported inputs and outputs visible in reports
- Manufacturer configuration commands and response behavior can differ between firmware builds and should be validated on the actual device
- Transport selection between TCP and UDP affects connection behavior and should match the device configuration
- Regional cellular differences and carrier requirements can influence 3G connectivity and uptime
- Always cross check feature availability such as tele cutoff, door detection, and external voltage monitoring against the device you have on hand
- Validate any remote command workflows with the manufacturer documentation before applying changes in production

## Why Protocol Understanding Matters

Knowing how the GT06E communicates with Plaspy helps ensure reliable tracking, correct event handling, and smoother troubleshooting when issues arise. A practical understanding of the protocol and connection context reduces integration time and helps operations teams maintain continuous visibility.

- Ensures correct configuration so location and alarm reports arrive at Plaspy as expected
- Helps diagnose why a device might not register or why events are missing from the platform
- Guides decisions about transport selection and APN setup for reliable cellular reporting
- Clarifies which optional inputs and outputs will be reported by a specific device and firmware
- Supports controlled deployment and testing when rolling out devices across a fleet
- Reduces guesswork when validating that features like SOS, geofence, and overspeed are functioning

## Why Use Plaspy with This Protocol

Using the Concox GT06E with Plaspy gives organizations a practical path to turn raw device reports into actionable fleet telemetry. The GT06E’s 3G reporting, alarms, and optional I O signals provide the data Plaspy needs to offer location tracking, alerting, and operational visibility across vehicles.

Plaspy centralizes incoming reports on a single listening endpoint so devices like the GT06E can be pointed to d.plaspy.com or 54.85.159.138 on port 8888 and benefit from automatic protocol detection. This simplifies setup and helps fleets move from device deployment to meaningful insights faster.

To learn more about Plaspy and how it works with trackers such as the Concox GT06E visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer details may change over time and users should verify the latest device specific information on the official manufacturer website https://www.iconcox.com/
