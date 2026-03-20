---
slug: /aoya/a12/protocol
id: a12-protocol
sidebar_label: Protocol
title: AoYa - A12 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the AoYa A12 GPS tracker and how it communicates with Plaspy for reliable vehicle tracking
keywords:
  - AoYa A12 protocol
  - AoYa A12 GPS protocol
  - AoYa A12 Plaspy compatibility
  - AoYa A12 tracking protocol
  - AoYa A12 communication
  - AoYa GPS tracker A12
  - AoYa vehicle tracker A12
  - Plaspy device compatibility
  - Plaspy GPS integration
  - vehicle tracking protocol
---

# AoYa - A12 Protocol

This page describes the public protocol context for using the AoYa A12 GPS tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in general, what connection settings are used, and which aspects of the tracker are relevant to successful integration without exposing private implementation details.

The AoYa A12 is a compact automotive tracker with GPS LBS and AGPS positioning, a SIMTK6260 GSM chip, a UBLOX GPS chip, and a built in 250 mAh Li ion battery for backup. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware release, hardware revision, and manufacturer implementation, so this page gives protocol context rather than firmware specific commands.

## Protocol Overview

At a high level, the tracker protocol is the set of conventions the A12 uses to report location, status, and events to a remote server. For Plaspy this means the device must be configured to reach the Plaspy endpoint and send regular reports or event messages that Plaspy can interpret.

- Enables the A12 to deliver GPS LBS and AGPS location reports to Plaspy for real time tracking.
- Conveys device identity and basic telemetry so Plaspy can associate messages with the correct asset.
- Carries status indicators such as fix quality, battery backup activity, and basic diagnostics that are useful for monitoring.
- Supports both periodic reporting and event driven messages depending on the device configuration and firmware behavior.
- Acts as the bridge between the A12 hardware and Plaspy analytics and visualization without requiring manual protocol selection by the operator.

## How Plaspy Detects the Protocol

Plaspy provides a common network endpoint for devices to report to and includes automatic protocol detection logic on the server side. When an A12 is pointed at the Plaspy endpoint and sends its first reports, Plaspy will identify the message format and continue processing messages for that device automatically.

- Plaspy server domain for device reporting is d.plaspy.com.
- The Plaspy server public IP address is 54.85.159.138 and the shared port is 8888.
- Devices may be configured to use UDP or TCP targeting port 8888; Plaspy uses the same port for all supported devices.
- Plaspy automatically detects the tracker protocol so users usually do not need to pick a protocol manually inside the platform.
- Proper device configuration to point to d.plaspy.com or the server IP is the common requirement for detection to occur reliably.

## Transport and Connection Context

Connection context describes how the A12 reaches Plaspy over the mobile network and which transport options are commonly used. The A12 can use either UDP or TCP depending on its firmware and configuration, and Plaspy accepts both transports on the shared reporting port.

- The device may be configured to use UDP on port 8888 for low overhead reporting.
- The device may be configured to use TCP on port 8888 for a connection oriented session if supported.
- Devices can point to the domain d.plaspy.com or directly to the IP address 54.85.159.138 during setup.
- All Plaspy devices report using the same port number so network ACLs and firewall rules only need to allow outbound connections to port 8888.
- Choose the transport that best matches the device firmware guidance and the operator network environment.

## Protocol Compatibility Notes

- Firmware revisions can change how the A12 formats certain messages or which events are reported, so always note firmware version when troubleshooting.
- Hardware revisions or regional variants can alter supported features such as AGPS behavior or backup battery reporting.
- Manufacturer side settings and default APN or SIM behavior can affect successful delivery to the Plaspy endpoint.
- Transport choice of UDP versus TCP should match what the device firmware supports and what provides reliable delivery in your network.
- When integrating at scale, validate a sample device end to end before wide deployment to confirm connectivity and detection with Plaspy.
- Consult the manufacturer documentation for any model specific configuration parameters that affect reporting behavior.

## Why Protocol Understanding Matters

Understanding the A12 communication protocol helps ensure reliable setup, faster troubleshooting, and predictable long term operation when using Plaspy. Knowing the role of transport, identity reporting, and firmware variability makes it easier to diagnose common issues and maintain fleet visibility.

- Speeds initial provisioning by ensuring devices are pointed at d.plaspy.com or 54.85.159.138 on port 8888.
- Helps narrow down connectivity issues when a device fails to appear in Plaspy or shows irregular updates.
- Clarifies why firmware updates or hardware changes can alter reported fields or frequency of messages.
- Supports better battery and power planning by understanding how backup reporting works on the A12.
- Aids in compliance with network and firewall rules by confirming the shared port and allowed endpoints.

## Why Use Plaspy with This Protocol

Using the AoYa A12 with Plaspy gives organizations a straightforward path to real time vehicle visibility, geolocation monitoring, and operational oversight. The A12’s compact form factor, reliable GPS performance, and backup battery make it suitable for automotive installations, and Plaspy’s automatic protocol detection and unified reporting port reduce setup complexity.

If you want to learn more about how Plaspy works with devices like the AoYa A12 and how to configure reporting to the platform, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer device details can change over time, so please verify the latest, device specific information on the manufacturer website at http://www.aoyagps.com/ before finalizing deployments.
