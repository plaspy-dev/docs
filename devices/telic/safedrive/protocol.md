---
slug: /telic/safedrive/protocol
id: safedrive-protocol
sidebar_label: Protocol
title: Telic - SafeDrive Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Telic SafeDrive and how it communicates with Plaspy server d.plaspy.com
keywords:
  - Telic SafeDrive protocol
  - Telic SafeDrive GPS tracker
  - SafeDrive Plaspy compatibility
  - Telic tracker protocol
  - vehicle tracking Plaspy
  - GPS tracker communication
  - telemetry SafeDrive
  - fleet management Telic
  - tracking protocol guide
  - Telic SafeDrive integration
---

# Telic - SafeDrive Protocol

This page provides a public protocol overview for using the Telic SafeDrive tracker with the Plaspy platform. It focuses on the communication context that matters when configuring a SafeDrive device to report location and status to Plaspy, while intentionally avoiding manufacturer proprietary internals and sensitive implementation specifics.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior for a SafeDrive can vary with firmware version, hardware revision, and manufacturer configuration, so this page describes the common communication context and practical compatibility considerations rather than device firmware internals.

## Protocol Overview

The communication protocol used by a SafeDrive device governs how the tracker identifies itself, transmits location and telemetry, and optionally accepts configuration commands. For integration with Plaspy this protocol must allow the device to send periodic or event driven reports to a Plaspy server so the platform can parse and present usable location data.

- Enables the SafeDrive to send GPS position, timing, and basic status to Plaspy
- Carries device identity or registration information so Plaspy can attribute reports to the correct asset
- Supports periodic reporting and event notifications used for telematics and track and trace workflows
- Provides a transport layer that Plaspy receives and maps into the platform for monitoring and alerts
- May include optional fields for battery, tamper, or input/output states depending on device settings

## How Plaspy Detects the Protocol

Plaspy receives data from trackers using a shared endpoint and port and automatically detects the protocol in use when a properly configured device reports. In most situations you do not need to choose a protocol manually inside Plaspy as long as the SafeDrive is pointed at the Plaspy endpoint and using supported transport settings.

- Plaspy listens on a common endpoint and port for all supported devices
- If the SafeDrive reports to d.plaspy.com or the Plaspy server IP the platform will attempt automatic protocol identification
- Plaspy automatically detects the tracker protocol when the device is correctly reporting
- Users typically only need to configure the SafeDrive to report to the Plaspy endpoint; manual selection inside Plaspy is usually unnecessary
- Proper device identity and configuration on the tracker side help the automatic detection succeed

## Transport and Connection Context

SafeDrive devices may use either UDP or TCP as their transport depending on the device configuration and firmware capabilities. For Plaspy integration, devices should be configured to send data to the Plaspy server address and port so reports arrive reliably for automatic detection and processing.

- Devices can be configured to use UDP or TCP on port 8888
- Plaspy accepts device reports at the domain d.plaspy.com
- The Plaspy server IP for direct configuration is 54.85.159.138
- All devices in Plaspy use the same port to simplify configuration and connectivity
- Choose UDP or TCP based on the SafeDrive settings and the reliability characteristics you need

## Protocol Compatibility Notes

- Firmware variations can change which transport modes and data fields are available on a SafeDrive
- Hardware revisions or model subvariants may present different default settings for reporting intervals and event reporting
- Manufacturer configuration commands or SMS settings may be required to point a SafeDrive at the Plaspy endpoint
- Selecting UDP or TCP must match what the device firmware supports and what you configure on the device
- Confirm that device identity reporting matches the format Plaspy expects so automatic detection works reliably
- Always validate compatibility against current manufacturer documentation before large scale deployment

## Why Protocol Understanding Matters

Understanding the SafeDrive communication protocol helps ensure correct setup, reliable reporting, and faster troubleshooting when integrating with Plaspy. Knowing the transport options and where the device should point its reports reduces configuration errors and helps maintain long term operational visibility.

- Speeds initial setup by ensuring the device is pointed at d.plaspy.com or 54.85.159.138 on port 8888
- Reduces downtime by making it easier to diagnose connectivity versus device configuration issues
- Helps plan for firmware differences that affect reporting frequency and available telemetry
- Enables informed decisions about choosing UDP or TCP based on device and network behavior
- Improves confidence that asset identity and event reporting will map correctly into Plaspy

## Why Use Plaspy with This Protocol

Using the Telic SafeDrive with Plaspy provides a practical way to capture vehicle location, events, and basic telemetry for logistics, theft protection, and business travel monitoring. The SafeDrive’s plug and play design, 12V socket installation, and compact form factor make it a flexible option for temporary or permanent tracking needs, while Plaspy handles reception, detection, and presentation of the reported data.

To learn more about Plaspy and how it works with trackers like the Telic SafeDrive, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions, please verify the latest documentation on the manufacturer website https://www.telic.de.
