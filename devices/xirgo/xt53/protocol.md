---
slug: /xirgo/xt53/protocol
id: xt53-protocol
sidebar_label: Protocol
title: Xirgo - XT53 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Xirgo XT53 and how it communicates with Plaspy for reliable asset tracking
keywords:
 - Xirgo XT53 protocol
 - Xirgo XT53 GPS protocol
 - XT53 Plaspy compatibility
 - Xirgo asset tracker protocol
 - XT53 communication protocol
 - XT53 tracking protocol
 - Xirgo GPS tracker Plaspy
 - XT53 fleet tracking compatibility
 - Xirgo device protocol guide
 - XT53 telemetry integration
---

# Xirgo - XT53 Protocol

This page covers the public protocol context for using the Xirgo XT53 tracker with Plaspy. It explains how the XT53, an ultra compact long life asset tracker, communicates over cellular networks to deliver location and basic telemetry into Plaspy without revealing sensitive implementation details. The intent is to describe connection expectations and integration context for fleet managers, integrators, and technical teams.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when an XT53 is configured to report to the Plaspy endpoint. Exact protocol behavior and available fields can vary by firmware version, hardware revision, and manufacturer configuration, so this page focuses on stable, public facts that help with successful device setup and ongoing operation.

## Protocol Overview

The tracker communication protocol is the set of rules the XT53 uses to identify itself, report position and status, and exchange the minimal uplink information Plaspy needs to create map positions and events. For the majority of deployments the protocol enables reliable reporting with an emphasis on battery efficiency and long term service life.

- Provides device identity and periodic uplinks so Plaspy can map positions and status changes.
- Carries location data and basic telemetry such as battery or check in events that Plaspy converts into alerts and history.
- Supports configurable reporting intervals to balance visibility and multi year battery operation.
- Operates over standard network transports so the XT53 can deliver reports from cellular networks into Plaspy.
- Focuses on dependable, compact reporting suitable for small equipment, pallets, and deployed assets.

## How Plaspy Detects the Protocol

Plaspy receives the XT53 uplinks at a shared server endpoint and uses automatic detection to identify the device protocol. In most cases you do not need to select a protocol manually inside Plaspy if the XT53 is configured to report to the Plaspy endpoint and network settings are correct.

- Plaspy server domain for device reporting is d.plaspy.com.  
- Plaspy server IP address is 54.85.159.138.  
- Plaspy listens for tracker traffic on port 8888 and all devices use the same port for reporting.  
- Plaspy automatically detects the tracker protocol from the incoming uplink pattern when a device reports to the endpoint.  
- Users typically only need to set the device to point to the Plaspy endpoint and select the appropriate transport type if required by the tracker.  

## Transport and Connection Context

Connection context describes how the XT53 reaches the Plaspy reporting endpoint over the mobile network. For many asset trackers this is a simple cellular uplink to the shared Plaspy endpoint using standard transport protocols.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and provisioning choices.  
- Devices commonly point to d.plaspy.com or the numeric endpoint 54.85.159.138 when a direct host address is required.  
- Port 8888 is the single port Plaspy uses across supported devices for device reporting.  
- Network and firewall rules must allow outbound cellular traffic to the Plaspy endpoint and the selected transport protocol.  
- APN and SIM provisioning on the XT53 must permit data uplinks to the Plaspy endpoint for reliable reporting.

## Protocol Compatibility Notes

- Firmware revisions can change which fields are reported and when, so verify behavior for the specific firmware installed on an XT53.  
- Hardware revisions may alter radio behavior or power management characteristics that affect reporting cadence and uplink reliability.  
- Manufacturer side configuration or provisioning options may change how the device frames its uplinks or which transport it prefers.  
- Transport selection between UDP and TCP can affect delivery semantics on lossy networks and should match the device configuration and network environment.  
- Confirm that the SIM profile and APN used allow connections to the Plaspy endpoint and do not block the required transport.  
- Validate compatibility against official manufacturer documentation for device specific implementation details and the latest firmware notes.

## Why Protocol Understanding Matters

Understanding how the XT53 communicates helps teams set up devices correctly, troubleshoot connectivity issues, and optimize reporting to achieve long battery life and reliable location visibility in Plaspy.

- Ensures the device is pointed to the correct Plaspy endpoint and transport so uplinks arrive predictably.  
- Helps diagnose delivery issues by checking domain or numeric endpoint resolution and transport selection.  
- Supports informed choices about reporting intervals to balance visibility against multi year battery life.  
- Clarifies when firmware or hardware differences could explain changes in reported fields or behavior.  
- Enables smoother onboarding for large deployments by aligning device provisioning with Plaspy expectations.

## Why Use Plaspy with This Protocol

Using the XT53 with Plaspy provides a compact low maintenance tracking solution for assets that must remain online for years. Plaspy ingests XT53 uplinks and presents them as map positions, events, and configurable alerts so teams can monitor asset location, battery status, and check in events without excessive field intervention.

To learn more about how Plaspy supports devices like the XT53 visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance verify the manufacturer documentation at https://xirgo.com/ as protocol support and firmware behavior can change over time.
