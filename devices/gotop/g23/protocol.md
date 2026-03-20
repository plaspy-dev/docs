---
slug: /gotop/g23/protocol
id: g23-protocol
sidebar_label: Protocol
title: GOTOP - G23 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for GOTOP G23 tracker compatibility with Plaspy real time reporting and fleet integration
keywords:
  - GOTOP G23 protocol
  - GOTOP G23 GPS protocol
  - GOTOP G23 communication protocol
  - GOTOP G23 tracking protocol
  - GOTOP G23 Plaspy
  - GOTOP G23 GPS tracker
  - GOTOP G23 compatibility
  - GOTOP G23 fleet tracking
  - GOTOP tracker protocol
  - GOTOP G23 telemetry
---

# GOTOP - G23 Protocol

This page describes the public protocol context for using the GOTOP G23 mini wire GPS tracker with Plaspy. It explains how the tracker reports position and events in general terms, what connection settings Plaspy accepts, and how protocol understanding supports a successful integration without exposing private implementation details.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol once the device reports to the platform. Exact protocol behavior and message content can vary by firmware revision, hardware changes, or manufacturer implementation, so field behavior may differ between units or firmware versions.

## Protocol Overview

The G23 tracker uses a device reporting protocol to send GNSS positions, cellular based positioning, and event telemetry to a remote server. The protocol defines how the unit identifies itself, how it indicates alarms and inputs, and how position updates are delivered so a fleet platform like Plaspy can map those messages to locations, alerts, and historical records.

- Enables transmission of GNSS and hybrid positioning data to a remote endpoint for live mapping and playback.
- Carries event markers such as ACC ignition state, power off, overspeed, vibration, and remote immobilizer actions for alerting and rules.
- Allows the tracker to identify itself so Plaspy can associate incoming reports with the correct device and account.
- Provides a consistent stream of telemetry that Plaspy maps to dashboards, notifications, and reporting workflows.
- May expose configuration or status fields that help with device management when accessed through supported channels.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for incoming reports and automatically detects the tracker protocol based on the incoming connection and data pattern. In most deployments a properly configured G23 will report to the Plaspy endpoint and be recognized without manual protocol selection in the Plaspy interface.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138.
- Plaspy uses port 8888 for device connections and all devices in Plaspy use the same port.
- Plaspy automatically detects the tracker protocol when a device reports to the platform.
- Users typically do not need to choose a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.

## Transport and Connection Context

The G23 supports standard cellular reporting over 2G and can use either UDP or TCP to deliver messages to a remote server depending on the device configuration and firmware. Connection details are focused on addressing and transport rather than message internals, and Plaspy accepts traffic to a single shared port for simplicity.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The device may be configured using UDP or TCP on port 8888 depending on device support and user configuration.
- Plaspy uses the same port 8888 for all supported trackers to simplify deployments.
- Choosing UDP or TCP can be a device configuration option; check the unit firmware settings for the preferred transport.
- Ensure APN and SIM settings on the device allow GSM data connectivity so reports reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message content or available features; confirm firmware release notes when in doubt.
- Hardware revisions and manufacturing variants may introduce small differences in supported inputs or event reporting.
- Transport selection between UDP and TCP is often configurable and can affect firewall and network requirements.
- Manufacturer default server settings may need to be updated to point at d.plaspy.com or 54.85.159.138 on port 8888.
- Validation on a bench or staging account is recommended before wide deployment to confirm expected behavior.
- Consult official manufacturer documentation for firmware specific behavior and any device configuration commands.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure a reliable connection to Plaspy, speeds troubleshooting, and reduces time to full operational monitoring for a fleet. Clarity about what the device reports and how it connects improves setup efficiency and long term reliability.

- Speeds initial setup by confirming correct server, APN, and transport settings.
- Makes it easier to interpret event reports such as ACC, power loss, and immobilizer actions.
- Helps diagnose connectivity problems by isolating transport and addressing issues.
- Supports informed decisions about firmware updates and configuration changes.
- Reduces ambiguity when mapping device events to Plaspy rules and notifications.

## Why Use Plaspy with This Protocol

Pairing the GOTOP G23 with Plaspy provides a practical solution for organizations that need discreet installation, reliable hybrid positioning, and straightforward event reporting for fleet visibility and anti theft workflows. Plaspy consumes the G23 telemetry and converts it into live maps, alerting, and historical reporting so teams can monitor assets, respond to incidents, and analyze operational data.

Learn more about Plaspy and how it integrates with devices like the G23 at https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation can change over time, so verify the latest device specific details on the official GOTOP website at https://www.gotop.cc/.
