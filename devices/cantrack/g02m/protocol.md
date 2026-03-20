---
slug: /cantrack/g02m/protocol
id: g02m-protocol
sidebar_label: Protocol
title: CanTrack - G02M Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for CanTrack G02M integration with Plaspy server d.plaspy.com port 8888 for GPRS and SMS location reporting
keywords:
  - CanTrack G02M protocol
  - CanTrack G02M GPS protocol
  - CanTrack G02M tracking protocol
  - CanTrack G02M communication
  - CanTrack pet tracker protocol
  - Plaspy compatible tracker
  - G02M GPRS tracker
  - GPS tracker protocol Plaspy
  - CanTrack device integration
  - G02M protocol guide
---

# CanTrack - G02M Protocol

This page documents the public protocol context for using the CanTrack G02M tracker with the Plaspy platform. It focuses on high level communication and integration considerations that matter when pointing a G02M at Plaspy for live tracking, alerts, and historical playback rather than low level internal protocol details.

The G02M Pet Tracker is a compact GPS/GSM/GPRS device that can report location via GPRS uploads or provide SMS location replies with Google Maps links. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by device firmware, hardware revision, and manufacturer implementation, so this page aims to explain how the G02M typically communicates with Plaspy in public, non sensitive terms.

## Protocol Overview

The tracker protocol defines how the G02M delivers position, status, and alert information to a remote server and how remote configuration may be performed using SMS. For integration with Plaspy, the protocol's role is to allow the device to identify itself, transmit usable coordinate and telemetry data, and signal events such as geofence breaches or low battery.

- Enables periodic or event driven location uploads so Plaspy can plot live position and store historical tracks.
- Carries basic telemetry and alert signals such as geofence notifications and low battery alarms for forwarding to Plaspy.
- Supports both server based GPRS uploads and SMS location replies, which provide flexible options for immediate lookup or continuous monitoring.
- Provides a consistent stream of data that Plaspy can use to correlate device identity with account records and map displays.
- Abstracts device specifics so that Plaspy can present location and alerts to users without exposing device internals.

## How Plaspy Detects the Protocol

Plaspy receives data from trackers using a shared server endpoint and port, and it automatically detects the tracker protocol used by an incoming device. When a G02M is configured to report to Plaspy, the platform typically recognizes the format and registers the device without requiring manual protocol selection by the user.

- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- The standard port for device connections is 8888 and Plaspy automatically detects the tracker protocol.
- Users normally do not need to select a protocol inside Plaspy if the G02M is configured to report to the Plaspy endpoint.
- Plaspy groups all devices on the same port and routing scheme so incoming reports are processed uniformly.
- Detection is based on the presence and structure of incoming reports rather than user configuration when the device points at the Plaspy endpoint.

## Transport and Connection Context

Connection choices are largely determined by the G02M firmware and configuration. The device supports GPRS uploads to a tracking server and can be set to use UDP or TCP as the transport protocol when reporting to Plaspy on the shared port.

- Devices may be configured to use either UDP or TCP on port 8888 depending on firmware and user settings.
- Trackers intended for Plaspy should be pointed to d.plaspy.com or directly to 54.85.159.138 as the upload target.
- All devices in Plaspy use the same port which simplifies server settings and device provisioning.
- GPRS upload is the primary transport for continuous tracking while SMS replies provide on demand location lookups.
- Transport selection affects delivery semantics but not the high level reporting model used by Plaspy to show location and alerts.

## Protocol Compatibility Notes

- The G02M is compatible with Plaspy when configured to upload to the Plaspy server endpoint via GPRS or when using SMS for quick location replies.
- Firmware versions and hardware revisions can change message formats or available features; always check the device firmware notes before large deployments.
- Some features such as WiFi assisted positioning, LBS fallback, or SMS command sets may vary by firmware and regional hardware builds.
- Choosing UDP versus TCP on port 8888 can change reliability and retransmission behavior depending on mobile network conditions.
- Manufacturer settings and default server entries may require updating to point the device to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy integration.
- Validate critical behaviors like geofence notifications and low battery reporting in a small test before wide scale rollout.

## Why Protocol Understanding Matters

A basic understanding of the tracker communication protocol helps ensure reliable setup, faster troubleshooting, and predictable device behavior when the G02M is used with Plaspy. Knowing how and where the device sends data reduces configuration errors and speeds diagnostics when tracking performance is critical.

- Confirms the device is pointing to the correct Plaspy endpoint and port so data reaches Plaspy reliably.
- Helps choose the appropriate transport mode UDP or TCP on port 8888 based on network environment and expected reliability.
- Guides testing of firmware dependent features like SMS location replies, geofence alerts, and low battery notifications.
- Aids in diagnosing connectivity issues by distinguishing between cellular, transport, and application layer problems.
- Supports operational decisions on reporting intervals and battery life trade offs for pet and small asset use cases.

## Why Use Plaspy with This Protocol

Using the CanTrack G02M with Plaspy provides a straightforward path to real time pet and small asset monitoring. The G02M’s compact design, GPRS upload capability, and SMS quick lookup features make it practical for collar mounted and portable tracking scenarios where size and battery life matter. With Plaspy receiving uploads at the shared endpoint, organizations and individuals gain map based visibility, configurable alerts, and historical routes without complex per device configuration.

If you want to learn more about how Plaspy works with devices like the CanTrack G02M and other compatible trackers, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance verify information on the CanTrack website https://www.cantrackgps.com/ since protocol support and firmware behavior can change over time.
