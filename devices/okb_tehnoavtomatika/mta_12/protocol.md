---
slug: /okb_tehnoavtomatika/mta_12/protocol
id: mta_12-protocol
sidebar_label: Protocol
title: OKB Tehnoavtomatika - MTA-12 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for OKB Tehnoavtomatika MTA 12 GPS tracker compatibility with Plaspy
keywords:
  - OKB Tehnoavtomatika MTA-12
  - MTA-12 GPS tracker
  - MTA-12 protocol
  - MTA 12 CAN tracking
  - vehicle tracking protocol
  - CAN bus telemetry
  - fleet management Plaspy
  - Plaspy compatibility
  - GPRS GPS tracker
  - SMS notifications tracker
---

# OKB Tehnoavtomatika - MTA-12 Protocol

This page describes the public protocol context for using the OKB Tehnoavtomatika MTA-12 tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in general terms, how Plaspy receives and recognizes reports, and what to consider when configuring the tracker to send telematics data and CAN bus information into the Plaspy system.

Plaspy uses shared connection settings across supported devices and can automatically detect the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact protocol behavior and available telemetry can vary by device firmware, hardware revision, and manufacturer implementation, so the information here is intended as high level guidance rather than a device specific command reference.

## Protocol Overview

The protocol used by the MTA-12 enables the device to transmit positioning, CAN bus telemetry, and status notifications to a remote server for processing and display. In the MTA-12, CAN data enriches GPS position reports with vehicle parameters such as fuel and ignition state, and the device supports multiple reporting channels including GPRS and SMS for notifications.

- Carries GPS location and timestamp information to a remote server for tracking and historical playback
- Transmits CAN bus derived telemetry to provide fuel and ignition state and other vehicle diagnostics
- Supports event driven and periodic reporting suitable for geofences, status changes, and regular updates
- Allows notifications to be routed via GPRS to a server or delivered via SMS to a configured phone number
- Works alongside device configuration options so reporting intervals and event filters can be adjusted per deployment

## How Plaspy Detects the Protocol

Plaspy receives incoming reports on a shared endpoint and automatically determines the tracker protocol from the data the device sends. In most common setups there is no need to manually select a protocol inside Plaspy if the device is correctly pointed to the Plaspy server and using the supported transport parameters.

- Plaspy server endpoint is d.plaspy.com and the direct IP is 54.85.159.138
- Plaspy listens on port 8888 for all device connections
- Plaspy automatically detects the tracker protocol when data arrives at the endpoint
- Users typically only need to configure the device to report to the Plaspy endpoint and use the supported transport
- If multiple reporting modes are available on the device, ensure the active mode is configured to send to d.plaspy.com on port 8888

## Transport and Connection Context

The transport layer and server destination are the primary connection details required to get MTA-12 reports into Plaspy. The MTA-12 can forward data over cellular data channels and may also send SMS alerts for specific events; the most common integration to Plaspy uses GPRS to direct telemetry to the Plaspy server.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and chosen settings
- The Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for direct IP configurations
- All devices in Plaspy use the same port for reporting which simplifies device setup
- Choose UDP or TCP on the device according to the stability and reliability needs of your deployment
- Ensure APN and cellular settings on the device are correct so the MTA-12 can reach d.plaspy.com or the server IP

## Protocol Compatibility Notes

- Firmware revisions on the MTA-12 can change which telemetry fields are available and how CAN data is presented
- Hardware variants and production runs may expose different CAN parameters or input/ output behavior
- The choice of UDP versus TCP can affect delivery characteristics and acknowledgement behavior on the network layer
- SMS and GPRS notification channels are complementary but require separate configuration on the device
- Validate device configuration and compatibility against official manufacturer documentation and any release notes for firmware
- When in doubt, test a device in a controlled environment to confirm the telemetry and events you expect are delivered to Plaspy

## Why Protocol Understanding Matters

Understanding how the MTA-12 communicates helps ensure reliable reporting, accurate telemetry interpretation, and faster troubleshooting when devices do not behave as expected. Knowing which data the device can supply and how it is transported to Plaspy reduces setup time and improves operational reliability.

- Helps choose the appropriate transport mode and settings for your coverage and reliability needs
- Enables correct mapping of CAN bus signals to vehicle parameters in the tracking platform
- Simplifies diagnosing missed reports or inconsistent telemetry during field deployments
- Supports better configuration of event filters and reporting intervals to balance data and cost
- Provides context for firmware related changes that can affect data fields and behavior

## Why Use Plaspy with This Protocol

Using the MTA-12 with Plaspy provides a straightforward way to consolidate GPS location, CAN bus telemetry, and event notifications into a single fleet management platform. Plaspy’s shared endpoint approach reduces per device configuration complexity and lets fleets focus on deployment and operational workflows rather than individual connection details.

To learn more about how Plaspy handles device integrations and to explore platform capabilities, visit https://www.plaspy.com. For the most current and device specific protocol, firmware, and implementation details for the MTA-12 consult the official OKB Tehnoavtomatika documentation at http://www.okb-ta.ru/ as manufacturer behavior and firmware support can change over time.
