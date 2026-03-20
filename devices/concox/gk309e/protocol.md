---
slug: /concox/gk309e/protocol
id: gk309e-protocol
sidebar_label: Protocol
title: Concox - GK309E Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for Concox GK309E integration with Plaspy covering connection context and compatibility guidance
keywords:
  - Concox GK309E protocol
  - GK309E GPS protocol
  - Concox GPS tracker protocol
  - GK309E Plaspy compatibility
  - GPS kids phone protocol
  - Concox GK309E communication
  - Plaspy device integration
  - GPS tracker protocol guide
  - GK309E tracking protocol
  - fleet and asset tracking
---

# Concox - GK309E Protocol

This page summarizes the public protocol context for using the Concox GK309E with Plaspy. It focuses on how the tracker communicates with Plaspy in general terms, highlighting connection points and practical compatibility considerations without exposing sensitive implementation details. The GK309E is a second generation GPS kids phone combining cellular calling with GPS location and optional RFID, SOS, and family number features designed for child safety.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. When integrating a device like the GK309E, treat this guidance as an operational overview and verify device specific behavior against manufacturer documentation when needed.

## Protocol Overview

The protocol used by the tracker defines how location, status, and alert data are packaged and sent to a remote server so that a platform such as Plaspy can record and display the information. For the GK309E this typically covers periodic location reports, SOS and family number events, and any optional RFID or auxiliary inputs the device may provide.

- Enables the tracker to report GPS position and status updates to a remote endpoint for processing by Plaspy.
- Allows the device to identify itself so Plaspy can associate incoming data with the correct asset or user.
- Carries event messages used for SOS alerts and family number call indications to the monitoring platform.
- Supports configuration and remote commands when the device and platform permit two way communication.
- Provides the structure that Plaspy uses to convert raw tracker messages into usable location and alert records.

## How Plaspy Detects the Protocol

Plaspy accepts device connections on a shared endpoint and is designed to recognize the reporting format automatically when a tracker is properly configured to send to the Plaspy endpoint. In most cases there is no need to manually select a protocol inside Plaspy once the device is pointing at the correct server and port.

- Plaspy server domain is d.plaspy.com
- Plaspy server IP is 54.85.159.138
- The port is 8888
- The device may be configured using UDP or TCP on port 8888
- All devices in Plaspy use the same port
- Plaspy automatically detects the tracker protocol

## Transport and Connection Context

Connection context is a key part of successful integration. The GK309E can be set to report to a remote server using standard transport layers depending on how the unit was provisioned. Understanding whether the device uses UDP or TCP and ensuring it points to the correct Plaspy host are practical first steps.

- The device may be configured using UDP or TCP on port 8888
- Devices may point to d.plaspy.com or 54.85.159.138 as the reporting endpoint
- The port used for reporting to Plaspy is 8888 for all supported devices
- Network reachability from the device SIM and any carrier NAT must be confirmed
- Persistent TCP sessions or stateless UDP reports are both common depending on device configuration

## Protocol Compatibility Notes

- Manufacturer firmware revisions can change message timing, available fields, or optional features supported by the device.
- Hardware revisions or optional modules such as RFID may alter which data elements are present in reports.
- Transport selection (UDP vs TCP) is often configurable on the device and can affect delivery characteristics.
- Plaspy uses a shared server and port approach so devices pointed at the correct endpoint will be detected automatically.
- Always validate device configuration and reporting target before expecting data to arrive in Plaspy.
- When in doubt, consult the device documentation or vendor support for firmware specific behavior.

## Why Protocol Understanding Matters

Knowing how the GK309E communicates helps ensure a smooth setup, reliable monitoring, and predictable troubleshooting when working with Plaspy. Even with automatic detection, visibility into connection context and expected message behavior reduces integration time and operational surprises.

- Speeds initial setup by confirming the device is pointed to the proper host and port
- Simplifies troubleshooting when location updates or alerts do not appear in Plaspy
- Helps diagnose transport level issues such as blocked ports or carrier limitations
- Guides decisions about firmware updates or configuration changes on the device
- Improves long term reliability by clarifying what data Plaspy expects from the tracker

## Why Use Plaspy with This Protocol

Using the GK309E with Plaspy gives organizations and families a practical way to collect location and event data from the tracker into a centralized platform for monitoring and oversight. Plaspy’s automatic protocol detection and shared connection settings reduce configuration complexity so the device can begin reporting with minimal manual mapping inside the platform.

If you want to learn more about how Plaspy handles device integrations and supported workflows, please visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific information with the manufacturer at https://www.iconcox.com/.
