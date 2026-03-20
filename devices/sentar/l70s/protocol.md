---
slug: /sentar/l70s/protocol
id: l70s-protocol
sidebar_label: Protocol
title: Sentar - L70S Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Sentar L70S GPS tracker and how it communicates with Plaspy using shared settings
keywords:
  - Sentar L70S protocol
  - Sentar L70S GPS protocol
  - Sentar L70S communication protocol
  - Sentar L70S tracking protocol
  - Sentar L70S Plaspy compatibility
  - Sentar GPS tracker protocol
  - L70S tracker integration
  - L70S tracker Plaspy
  - Sentar kids GPS protocol
  - Sentar L70S MTK2503
---

# Sentar - L70S Protocol

This page describes the public protocol context for using the Sentar L70S tracker with the Plaspy platform. It focuses on the communication role the tracker plays when reporting location and status to Plaspy, and the shared connection settings you will commonly configure on the device or in a provisioning tool. The intent is to help integrators and fleet managers understand how the device exchanges usable data with Plaspy without exposing sensitive or proprietary implementation details.

The Sentar L70S is a kids GPS tracker watch with a known MTK2503 chipset and multiple location modes including GPS, AGPS, LBS, and WiFi. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, however exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation. Confirm device specific behavior with Sentar documentation when you need firmware level details.

## Protocol Overview

At a high level, the device protocol defines how the L70S reports identity, location, and status so Plaspy can ingest and present that information. The protocol governs periodic reporting, event messages, and basic command responses from the tracker to the server, enabling reliable position updates and monitoring for the watch form factor.

- Enables the L70S to send location and status updates that Plaspy can interpret and display
- Carries device identity information so Plaspy can associate messages with the correct tracker
- Allows event driven messages such as movement alerts or SOS signals to be forwarded to Plaspy
- Supports mixed location sources used by the L70S such as GPS, AGPS, LBS, and WiFi for better coverage
- Works within the constraints of the device firmware and hardware revision to deliver usable telemetry

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming connections from many tracker models using a shared endpoint and port and to identify the device protocol automatically. When a properly configured device reports to Plaspy, the platform typically detects the protocol without requiring manual selection by the user.

- Devices report to the Plaspy server domain d.plaspy.com or the public server IP 54.85.159.138
- The Plaspy endpoint listens on port 8888 for tracker reports
- Devices may be configured to use UDP or TCP transport on port 8888 depending on device capability
- All devices in Plaspy use the same port for incoming data
- Plaspy automatically detects the tracker protocol so manual protocol selection is usually unnecessary when devices are pointed at the Plaspy endpoint

## Transport and Connection Context

Connecting an L70S to Plaspy requires pointing the tracker at the Plaspy endpoint and using the supported transport protocol. The L70S can transmit its position using the device's supported radios and location modes while delivering messages over IP to the Plaspy server.

- The tracker may be configured to send data to d.plaspy.com or to the numeric server address 54.85.159.138
- Plaspy accepts both UDP and TCP on port 8888 so choose the transport that matches the device firmware and network reliability needs
- Use the same port for all Plaspy supported devices to simplify provisioning and firewall rules
- Ensure the device reporting interval and allowed transports are compatible with mobile networks and the tracker battery considerations
- Validate that outbound connections from the device are allowed by network carriers and any intermediate firewalls

## Protocol Compatibility Notes

- Firmware version differences can change message timing, available fields, and supported transports
- Hardware revisions or regional variants may affect which location modes or sensors are available
- Manufacturer side settings or operator provisioning can introduce small protocol differences across batches
- Selecting UDP or TCP transport on the device may change delivery characteristics and retry behavior
- Always confirm the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888
- Validate compatibility using official Sentar resources for the specific L70S firmware you have on hand

## Why Protocol Understanding Matters

Understanding how the L70S communicates helps ensure a smooth setup with Plaspy, aids troubleshooting, and supports long term reliability of tracking for children and small assets. Protocol knowledge also helps you make informed choices about reporting intervals, transport selection, and integration testing.

- Troubleshoot connectivity issues faster by checking endpoint, transport, and port settings first
- Reduce false alarms and improve location quality by aligning device reporting with Plaspy expectations
- Plan battery and reporting strategies based on how frequently the device sends data
- Ensure consistent behavior across a deployed fleet by tracking firmware and hardware differences
- Make informed decisions about using GPS, AGPS, LBS, and WiFi modes to meet coverage needs

## Why Use Plaspy with This Protocol

Using the Sentar L70S with Plaspy gives organizations and caregivers centralized visibility into location and safety events reported by the device. Plaspy’s automatic protocol detection and unified endpoint model simplify fleet or fleet of one setup by reducing the need to manually configure protocol mappings inside the platform.

To learn more about how Plaspy handles device connections and to explore platform features, visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and implementation clarifications, always verify information with the manufacturer at http://www.sentarsmart.com/ as firmware behavior and device implementations can change over time.
