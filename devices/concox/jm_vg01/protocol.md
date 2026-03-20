---
slug: /concox/jm_vg01/protocol
id: jm_vg01-protocol
sidebar_label: Protocol
title: Concox - JM-VG01 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox JM-VG01 and how it communicates with Plaspy for reliable vehicle tracking
keywords:
  - Concox JM-VG01 protocol
  - JM-VG01 GPS protocol
  - Concox vehicle tracker protocol
  - JM-VG01 Plaspy compatibility
  - Concox tracking protocol
  - vehicle tracking protocol
  - GPS tracker protocol
  - Plaspy device compatibility
  - Concox JM VG01 tracking
  - fleet tracking Concox
---

# Concox - JM-VG01 Protocol

This page provides a public protocol overview for the Concox JM-VG01 series tracker and explains how the device communicates with the Plaspy platform. It focuses on high level, non-sensitive protocol context that helps administrators and integrators understand how the tracker reports data to Plaspy and what to check during setup.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page outlines general communication concepts and practical compatibility considerations rather than firmware level details.

## Protocol Overview

The tracker protocol is the set of messages and behavior the JM-VG01 uses to report position, motion, and status information to a remote server and to receive approved control instructions. In practice, the protocol enables Plaspy to receive GPS and inertial navigation updates, driving behavior alerts, and basic device status so the device can be monitored and managed.

- Provides position and time reports that let Plaspy show vehicle location and movement.
- Delivers motion and driving behavior indicators from the device sensors to support alerts and analytics.
- Transmits device status information such as ignition state, battery or power status, and panic events.
- Supports remote control actions and alert forwarding where the tracker firmware implements command handling.
- Enables INS aided GPS and fallback reporting for reliable tracking in poor GPS conditions.
- Carries telemetry needed for mileage calculations and behaviour analysis so Plaspy can present accurate operational metrics.

## How Plaspy Detects the Protocol

Plaspy receives tracker connections on a shared endpoint and port and uses automatic detection to determine which tracker protocol a device is using. In most cases, a properly configured device that reports to the Plaspy endpoint will be identified without manual protocol selection by the user.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for direct configuration options.
- The Plaspy port in use for device reporting is 8888 and all devices in Plaspy use the same port.
- Devices may be configured to use UDP or TCP on port 8888 depending on device support and network needs.
- When a device reports to the Plaspy endpoint, Plaspy automatically detects the tracker protocol and matches the incoming data to its parsers.
- If detection does not succeed, checking the device reporting address, transport setting, and firmware configuration is the usual next step.
- Contact Plaspy support with model and firmware details if automatic detection requires assistance.

## Transport and Connection Context

Connection transport and server targeting are fundamental to reliable reporting. The JM-VG01 family supports standard TCP or UDP reporting modes; which transport is used depends on device firmware settings and installation network characteristics.

- Devices may use UDP or TCP on port 8888 to report data to Plaspy.
- Devices can be pointed to the Plaspy server by domain d.plaspy.com or by the server IP 54.85.159.138 depending on configuration preferences.
- All devices in Plaspy use the same port which simplifies server settings across mixed fleets.
- Network elements such as NAT, firewalls, and mobile operator configurations may require UDP or TCP selection to be adjusted for reliable connectivity.
- Use persistent TCP for stable sessions where the device and network support it, or UDP if the device firmware and network conditions favor it.
- Ensure the device reporting host and transport match the settings on the tracker to avoid dropped or misrouted messages.

## Protocol Compatibility Notes

- Firmware variations can change which features and message types the JM-VG01 sends; verify firmware release notes for feature-level differences.
- Hardware revisions or submodels may include different sensor sets or input options that affect available telemetry.
- Manufacturer-side configuration options may provide multiple reporting formats or command interfaces; confirm which are enabled on your units.
- Transport choice (UDP vs TCP) affects delivery characteristics and may influence behavior such as retransmission and session persistence.
- Always validate compatibility by testing a sample device with the Plaspy endpoint before large scale deployment.
- For exact command availability for features like remote cut-off, panic alerts, or advanced INS behavior consult the manufacturer documentation.
- If protocol behavior differs from expectations, check device settings for reporting host, transport, and firmware version first.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure correct setup, reliable data, and efficient troubleshooting when integrating JM-VG01 devices with Plaspy. Clear knowledge of what the device sends and expects lets you confirm that telemetry, alerts, and remote actions will behave as required.

- Confirms that devices are correctly pointed to d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy receives reports.
- Helps diagnose transport related issues when choosing between UDP and TCP for a given network environment.
- Verifies that features such as INS aided GPS, driving behavior alerts, ignition detection, and panic events are supported and reported by the device firmware.
- Supports proper planning for fleet deployments by ensuring consistent reporting across hardware revisions.
- Aids in troubleshooting when Plaspy does not automatically detect a device by checking reporting settings and firmware versions.
- Reduces downtime by enabling quicker isolation of connection, configuration, or firmware causes of missing telemetry.

## Why Use Plaspy with This Protocol

Using Concox JM-VG01 family devices together with Plaspy gives organizations practical visibility into vehicle location, driving behavior, and operational metrics. The device's INS aided GPS and motion sensor data complement Plaspy's platform capabilities to provide reliable tracking and event reporting even in challenging signal conditions.

Plaspy centralizes reporting from diverse devices by using a single well known port and automatic protocol detection, simplifying fleet onboarding and reducing configuration overhead. To learn more about how Plaspy can work with your Concox devices visit https://www.plaspy.com. For the most current device specific protocol and firmware details, please verify information with the manufacturer at https://www.iconcox.com/ since protocol support and firmware behavior can change over time.
