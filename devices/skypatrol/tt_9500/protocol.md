---
slug: /skypatrol/tt_9500/protocol
id: tt_9500-protocol
sidebar_label: Protocol
title: SkyPatrol - TT 9500 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for SkyPatrol TT 9500 and how the device communicates with Plaspy for reliable GPS tracking
keywords:
  - SkyPatrol TT 9500 protocol
  - SkyPatrol TT 9500 GPS protocol
  - SkyPatrol TT 9500 communication
  - TT 9500 tracking protocol
  - EDDIE+ custom protocol
  - Plaspy compatible tracker
  - GPS tracker protocol Plaspy
  - vehicle tracking TT 9500
  - geofence TT 9500
  - fleet management GPS tracker
---

# SkyPatrol - TT 9500 Protocol

This page summarizes the public protocol context for using the SkyPatrol TT 9500 tracker with Plaspy. It describes the role of the device communication protocol, how the tracker reports to Plaspy, and what to expect when integrating the TT 9500 into a Plaspy deployment. The goal is to provide practical, non sensitive information that helps with planning and setup.

Plaspy uses a shared connection endpoint and port across supported devices and automatically detects the tracker protocol once the device reports to that endpoint. The TT 9500 may use SkyPatrols EDDIE+ custom protocol for feature rich reporting including geofences and event counters. Exact behavior can vary by firmware version, hardware revision, and manufacturer configuration, so always confirm device level details when in doubt.

## Protocol Overview

The protocol used by the TT 9500 defines how the tracker identifies itself, reports location and status, and delivers event data to a remote server. For Plaspy integration this protocol is the bridge between device features such as geofencing, counters, and remote relay control and the cloud services that present that data.

- Enables the TT 9500 to report position, status, and event information to a remote endpoint
- Carries geofence and route events that support circular polygonal and route based monitoring
- Transmits device identifiers and event context so Plaspy can associate messages with the correct asset
- Supports device features such as remote relay control and multiple types of counters as reported by the tracker
- Works with the TT 9500s firmware specific implementation including EDDIE+ where available

## How Plaspy Detects the Protocol

Plaspy accepts incoming reports on a single shared endpoint and automatically identifies the tracker protocol based on the incoming data and device identification. In most deployments there is no need to manually select a protocol inside Plaspy once the device is configured to report to the Plaspy endpoint.

- Plaspy listens on the shared domain d.plaspy.com and the public IP 54.85.159.138
- All devices in Plaspy use the same network port which simplifies device configuration
- The TT 9500 may be configured to send data using UDP or TCP to the Plaspy endpoint
- When a properly configured device connects and reports, Plaspy automatically detects the device protocol
- Manual protocol selection inside Plaspy is rarely required if device reports are routed correctly

## Transport and Connection Context

Connection settings determine how the device reaches Plaspy but do not change the role of the device protocol itself. The TT 9500 can be set up to send data over UDP or TCP depending on the device firmware and user configuration. It is common to point the device either to the Plaspy domain or directly to the server IP.

- Devices may be configured to use either UDP or TCP on port 8888 depending on device and firmware options
- Plaspy accepts traffic on port 8888 for all supported trackers which simplifies configuration
- Devices can point to d.plaspy.com or directly to 54.85.159.138 as the reporting endpoint
- Using the shared port and endpoint allows Plaspy to manage multiple models with consistent network settings
- Ensure the chosen transport is allowed by carrier and network policies for reliable reporting

## Protocol Compatibility Notes

- Firmware variations can alter how features such as geofencing or counters are reported
- Hardware revisions sometimes change available inputs or sensor behavior even if the protocol name remains the same
- Manufacturer side configuration and custom fields may differ between deployments and regions
- Transport mode selection TCP versus UDP can affect latency and delivery behavior for some event types
- Confirm which EDDIE+ protocol features are implemented on your specific TT 9500 firmware build
- Validate device identifiers and reporting format against current manufacturer documentation before mass deployment

## Why Protocol Understanding Matters

Understanding the communication protocol used by the TT 9500 helps ensure accurate setup, faster troubleshooting, and predictable long term operation when the device reports into Plaspy. Knowledge of how the tracker reports events and status makes it easier to map device capabilities into Plaspy features and to interpret incoming telemetry.

- Helps verify that geofence events and route alerts are reported in the expected way
- Makes it easier to confirm that counters and relay commands are supported and visible in Plaspy
- Speeds troubleshooting by narrowing network and transport related issues from protocol level issues
- Supports planning for firmware updates and how they might change the reporting behavior
- Aids in documenting device configuration for fleet wide rollouts

## Why Use Plaspy with This Protocol

The SkyPatrol TT 9500 provides robust location and event capabilities that pair well with a platform that can automatically detect and accept reports from a variety of trackers. Using Plaspy with the TT 9500 lets organizations capture geofence alerts, counters, and remote relay events in a unified monitoring environment while minimizing per device configuration work.

If you want to learn more about Plaspy and how it handles device protocols visit https://www.plaspy.com. For the latest device specific protocol descriptions, firmware notes, and implementation details always check the manufacturer documentation at https://www.skypatrol.com/ for accuracy and any firmware specific behavior that could affect integration.
