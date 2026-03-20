---
slug: /laipac/starfinder_aire/protocol
id: starfinder_aire-protocol
sidebar_label: Protocol
title: Laipac - StarFinder AIRE Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Laipac StarFinder AIRE and how it communicates with Plaspy for tracking and monitoring
keywords:
  - Laipac StarFinder AIRE protocol
  - StarFinder AIRE GPS protocol
  - Laipac protocol Plaspy
  - GPS tracker compatibility Plaspy
  - StarFinder AIRE communication
  - vehicle tracking Laipac
  - StarFinder AIRE integration
  - fleet tracking Laipac
  - GPS device protocol overview
  - remote monitoring tracker protocol
---

# Laipac - StarFinder AIRE Protocol

This page describes the public protocol context for using the Laipac StarFinder AIRE tracker with Plaspy. It focuses on how the device communicates with Plaspy servers in non sensitive terms, what role the reporting protocol plays, and practical considerations for connecting and operating the tracker within Plaspy. The technical summary here is intended for fleet managers, integrators, and technical users who need clear guidance on device communication without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices are correctly configured to report. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so the information here is general and complements official Laipac documentation. The StarFinder AIRE offers features such as geo fencing, motion sensing, over the air configuration, and relays, all of which rely on reliable reporting to a compatible platform like Plaspy.

## Protocol Overview

The tracker protocol defines how the StarFinder AIRE reports position, alerts, and status to a remote server. At a high level the protocol ensures the device can identify itself, transmit GPS and sensor data, and receive configuration or command updates where supported. Plaspy ingests those reports and makes them available for tracking, alerts, and operational workflows.

- Enables transmission of location, movement alerts, and status updates from the device to Plaspy
- Supports device identification so Plaspy can associate incoming data with the correct asset
- Carries sensor and input information that drives geo fence, motion, and over speed alerts
- Can include periodic heartbeat and power status messages used for monitoring device health
- May support over the air configuration commands depending on firmware and manufacturer allowances

## How Plaspy Detects the Protocol

Plaspy receives device reports at a shared endpoint and port and uses automatic detection to determine the tracker protocol. When the StarFinder AIRE is configured to report to Plaspy, the platform recognizes the device format and routes data into the appropriate processing pipeline, so manual protocol selection by the user is generally not required.

- Plaspy server domain is d.plaspy.com which devices can target for reporting
- Plaspy server IP is 54.85.159.138 and is an alternative endpoint some integrators use
- The port used for all devices in Plaspy is 8888 and is common across supported hardware
- The device may be configured using UDP or TCP on port 8888 depending on device support and network needs
- Plaspy automatically detects the tracker protocol once the device reports to the platform
- Typically there is no need to select a protocol inside Plaspy if the tracker is pointed to the correct Plaspy endpoint

## Transport and Connection Context

Connection choices affect reliability, latency, and firewall configuration. The StarFinder AIRE can be set to use either UDP or TCP depending on the device firmware and configuration interface. Knowing the transport and endpoint details helps with network configuration and initial device setup.

- The device may be configured to use UDP on port 8888 for lower overhead reporting
- The device may be configured to use TCP on port 8888 for connection oriented delivery when supported
- Devices can report to the domain d.plaspy.com or directly to the IP address 54.85.159.138
- Port 8888 is the shared port used by all devices connected to Plaspy
- Choose transport based on network stability, firewall rules, and the device configuration options
- Verify the device is pointed to the Plaspy endpoint before expecting automatic detection

## Protocol Compatibility Notes

- Firmware variations can change message content, available features, and over the air commands
- Hardware revisions may affect available I/O, sensor reporting, or antenna characteristics
- Manufacturer side configuration options and firmware builds can create small protocol differences
- Transport selection between UDP and TCP can influence delivery and should match device configuration
- Confirm device reporting endpoint and credentials where applicable before deployment
- Validate feature availability such as relays, geo fencing, and power alerts against the device firmware level
- Always check manufacturer release notes for firmware specific changes that affect protocol behavior

## Why Protocol Understanding Matters

Having a practical understanding of the tracker protocol helps with setup, troubleshooting, and long term reliability when integrating the StarFinder AIRE with Plaspy. Even when Plaspy handles protocol detection automatically, knowing how the device reports and what affects its behavior speeds resolution of connectivity or data issues.

- Ensures correct server and transport settings are applied during device provisioning
- Helps diagnose why a device might not appear in Plaspy or why alerts are missing
- Informs firewall and network configuration decisions for stable reporting
- Guides decisions about firmware upgrades and how they may affect existing integrations
- Aids in confirming that sensor and input events are transmitted as expected
- Supports planning for deployment scenarios like international roaming or restricted networks

## Why Use Plaspy with This Protocol

Using the Laipac StarFinder AIRE with Plaspy provides organizations with centralized visibility into location, motion alerts, and device status while taking advantage of Plaspy automatic protocol handling. The combination is useful for monitoring small vehicles, equipment, and assets where compact hardware, waterproofing, and sensor inputs are priorities. Plaspy normalizes incoming reports so teams can focus on alerts, geofences, and operational workflows rather than low level parsing.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device specific protocol and firmware information on the official manufacturer website https://laipac.com/ before deploying at scale.
